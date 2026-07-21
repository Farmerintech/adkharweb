import fs from "fs";

const BASE_URL = "https://ummahapi.com";
const API_KEY = "umh_ad0bf092e57e925e0737579668cda6ee6a71b4d2";

const collections = [
  { key: "bukhari", count: 7563 },
  { key: "muslim", count: 7190 },
  { key: "abudawud", count: 5274 },
  { key: "tirmidhi", count: 3956 },
  { key: "ibnmajah", count: 4341 },
  { key: "nasai", count: 5761 },
  { key: "malik", count: 1900 },
];

const CONCURRENT_REQUESTS = 100;

async function fetchHadith(collection, number) {
  try {
    const response = await fetch(
      `${BASE_URL}/api/hadith/${collection}/${number}?apikey=${API_KEY}`
    );

    if (!response.ok) return null;

    const data = await response.json();

    return data.success ? data.data : null;
  } catch {
    return null;
  }
}

async function downloadHadith() {
  const allHadith = {};

  for (const collection of collections) {
    console.log(`\nStarting ${collection.key}...`);

    allHadith[collection.key] = [];

    for (
      let start = 1;
      start <= collection.count;
      start += CONCURRENT_REQUESTS
    ) {
      const batch = [];

      for (
        let i = start;
        i < start + CONCURRENT_REQUESTS &&
        i <= collection.count;
        i++
      ) {
        batch.push(fetchHadith(collection.key, i));
      }

      const results = await Promise.all(batch);

      allHadith[collection.key].push(
        ...results.filter(Boolean)
      );

      console.log(
        `${collection.key}: ${Math.min(
          start + CONCURRENT_REQUESTS - 1,
          collection.count
        )}/${collection.count}`
      );
    }

    console.log(
      `${collection.key}: ${allHadith[collection.key].length} saved`
    );

    fs.writeFileSync(
      `${collection.key}.json`,
      JSON.stringify(allHadith[collection.key], null, 2),
      "utf8"
    );
  }

  fs.writeFileSync(
    "hadith-complete.json",
    JSON.stringify(allHadith, null, 2),
    "utf8"
  );

  console.log("All hadith downloaded successfully.");
}

downloadHadith();