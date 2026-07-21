import fs from "fs/promises";
import { GoogleGenAI } from "@google/genai";



const ai = new GoogleGenAI({
  apiKey: "AIzaSyAONELoPWJZRh3DbEZ7DdfHcVBv5lwDbcI"
});

const INPUT_FILE = "./adkb.json";
const OUTPUT_FILE = "./adhkar_enriched.json";

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function enrichAdhkar(item) {
  const prompt = `
You are an expert in Islamic transliteration and translation.

For the following Arabic adhkar:

1. Generate an accurate Islamic transliteration using Latin letters.
2. Generate an accurate English translation.

Return ONLY valid JSON.

Example response:
{
  "transliteration": "Raditu billahi Rabban wa bil Islami dinan...",
  "translation": "I am pleased with Allah as my Lord..."
}

Arabic Adhkar:
${item.content}
`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    let text = response.text;

    // Remove markdown wrappers if Gemini adds them
    text = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const result = JSON.parse(text);

    return {
      ...item,
      transliteration: result.transliteration || "",
      translation: result.translation || "",
    };
  } catch (error) {
    console.log("\nFailed processing:");
    console.log(item.content.substring(0, 60));
    console.log(error.message);

    return {
      ...item,
      transliteration: "",
      translation: "",
    };
  }
}

async function main() {
  const raw = await fs.readFile(INPUT_FILE, "utf8");
  const data = JSON.parse(raw);

  for (const category of Object.keys(data)) {
    console.log(`\nProcessing ${category}\n`);

    for (let i = 0; i < data[category].length; i++) {
      console.log(
        `[${i + 1}/${data[category].length}] ${
          data[category][i].content.substring(0, 40)
        }...`
      );

      data[category][i] = await enrichAdhkar(
        data[category][i]
      );

      // Prevent hitting rate limits
      await sleep(1000);
    }
  }

  await fs.writeFile(
    OUTPUT_FILE,
    JSON.stringify(data, null, 2, ),
    "utf8"
  );

  console.log("\nFinished successfully!");
  console.log(`Saved to ${OUTPUT_FILE}`);
}

main().catch(console.error);