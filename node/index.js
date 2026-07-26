import fs from "fs";

const BASE_URL = "https://islamicapi.com/api/v1/ruqyah/";
const API_KEY =
  "klYUzhgkgqXLOU0j4XreKkykj5DJ8j4KW0GbI88fGLl15V5S";

const languages = ["en", "ar"];

const topics = [
  "introduction-to-ruqyah",
  "protect-yourself-from-jinn",
  "black-magic-sihr",
  "evil-eye-and-envy",
  "about-raqi",
  "types-of-hijamah-bloodletting",
  "ruqyah-materials",
  "7-day-detoxification-program",
  "waswasah-whisperings",
  "the-ruqyah-bath-against-sihr",
  "other-diseases",
  "treatment-for-general-problems",
  "full-ruqyah-program",
];

async function fetchRuqyah(language, topic) {
  const url =
    `${BASE_URL}?type=topic` +
    `&lang=${language}` +
    `&topic=${topic}` +
    `&api_key=${API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `${language} / ${topic}: HTTP ${response.status}`
    );
  }

  const result = await response.json();

  if (result.status !== "success") {
    throw new Error(
      `${language} / ${topic}: ${result.message}`
    );
  }

  return result.data;
}

async function downloadAllRuqyah() {
  const ruqyah = {
    en: {},
    ar: {},
  };

  for (const language of languages) {
    console.log(`\n🌍 Downloading ${language.toUpperCase()} Ruqyah...`);

    for (const topic of topics) {
      try {
        console.log(`  → ${topic}`);

        const data = await fetchRuqyah(language, topic);

        ruqyah[language][topic] = data;

        console.log(
          `  ✅ ${data.length} article(s)`
        );
      } catch (error) {
        console.error(
          `  ❌ Failed: ${language} / ${topic}`
        );
        console.error(error.message);
      }
    }
  }

  fs.writeFileSync(
    "./ruqyah.json",
    JSON.stringify(ruqyah, null, 2),
    "utf8"
  );

  console.log("\n🎉 Done!");
  console.log("📁 Saved as: ruqyah.json");
}

downloadAllRuqyah();