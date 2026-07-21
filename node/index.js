import fs from "fs"

const BASEURL = "https://ummahapi.com";

async function fetchData() {
  try {
     const res = await fetch(
    `${BASEURL}/api/duas?apikey=umh_ad0bf092e57e925e0737579668cda6ee6a71b4d2`
  );

    const data = await res.json();

    fs.writeFileSync(
      "duas.json",
      JSON.stringify(data, null, 2)
    );

    console.log("Saved to duas.json");
  } catch (error) {
    console.log(error);
  }
}

fetchData();



async function downloadDuas() {
  const res = await fetch(
    `${BASEURL}/api/asma-ul-husna?apikey=umh_ad0bf092e57e925e0737579668cda6ee6a71b4d2`
  );


  const data = await res.json();

  fs.writeFileSync(
    "./asmaullah",
    JSON.stringify(data, null, 2)
  );

  console.log("Duas saved successfully.");
}

downloadDuas();