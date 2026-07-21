import json
import requests

BASE_URL = "https://ummahapi.com"
API_KEY = "umh_ad0bf092e57e925e0737579668cda6ee6a71b4d2"

url = f"{BASE_URL}/api/duas?apikey={API_KEY}"

try:
    response = requests.get(url)
    response.raise_for_status()

    data = response.json()

    with open("duas.json", "w", encoding="utf-8") as file:
        json.dump(data, file, indent=2, ensure_ascii=False)

    print("Duas saved successfully to duas.json")

except requests.exceptions.RequestException as e:
    print(f"Error fetching data: {e}")