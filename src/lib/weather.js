const BUCHAREST = { lat: 44.4268, lon: 26.1025 };

export async function fetchBucharestWeather() {
  // Open-Meteo: free, no key
  const url = new URL("https://api.open-meteo.com/v1/forecast");
  url.searchParams.set("latitude", String(BUCHAREST.lat));
  url.searchParams.set("longitude", String(BUCHAREST.lon));
  url.searchParams.set("current", "temperature_2m,weather_code,wind_speed_10m");
  url.searchParams.set("timezone", "Europe/Bucharest");

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error("Weather fetch failed");
  const data = await res.json();
  return data?.current ?? null;
}

export function weatherLabel(code) {
  // simplified mapping
  if (code == null) return "—";
  if (code === 0) return "Senin";
  if ([1,2,3].includes(code)) return "Parțial noros";
  if ([45,48].includes(code)) return "Ceață";
  if ([51,53,55,56,57].includes(code)) return "Burniță";
  if ([61,63,65,66,67].includes(code)) return "Ploaie";
  if ([71,73,75,77].includes(code)) return "Ninsoare";
  if ([80,81,82].includes(code)) return "Averse";
  if ([95,96,99].includes(code)) return "Furtună";
  return "Vreme mixtă";
}
