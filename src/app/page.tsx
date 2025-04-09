"use client";
import { useEffect, useState } from "react";

function getCurentDate() {}

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState();

  //function that fetches the weather data
  async function fetchData(cityName: String) {
    try {
      const response = await fetch(
        "http://localhost:3000/api/weather?address=" + cityName
      );
      const jsonData = (await response.json()).data;
      setWeatherData(jsonData);
    } catch (error) {
      console.log(error);
    }
  }

  //use effect hook
  useEffect(() => {
    fetchData("abuja");
  }, []);

  return (
    <div>
      <h1>Weather App</h1>
    </div>
  );
}
