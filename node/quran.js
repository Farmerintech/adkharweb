import fs from "fs"
const BASE_URL = "https://ummahapi.com";
const API_KEY = "umh_ad0bf092e57e925e0737579668cda6ee6a71b4d2";

async function downloadQuran() {
  const quran = [];

  for (let surahNumber = 1; surahNumber <= 114; surahNumber++) {
    try {
      console.log(`Downloading Surah ${surahNumber}...`);

      const response = await fetch(
        `${BASE_URL}/api/quran/surah/${surahNumber}?apikey=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error(
          `Failed to fetch Surah ${surahNumber}: ${response.status}`
        );
      }

      const data = await response.json();

      quran.push(data);

      console.log(`✓ Surah ${surahNumber} downloaded`);
    } catch (error) {
      console.error(
        `✗ Error downloading Surah ${surahNumber}:`,
        error.message
      );
    }
  }

  fs.writeFileSync(
    "quran-complete.json",
    JSON.stringify(quran, null, 2),
    "utf8"
  );

  console.log("Complete Quran saved to quran-complete.json");
}

downloadQuran();