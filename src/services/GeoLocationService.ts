import { nominatimConfig } from "../constants/config";


export const fetchGeoLocationData = async ( lat : number, lng: number, format: string) => {
  try {
    const response = await fetch(`${nominatimConfig.apiBaseUrl}?format=${format}&lat=${lat}&lon=${lng}`, {
      headers: {
        "Accept-Language": "en",
        "User-Agent": "geo-city-app",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data

  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};