import { NextRequest, NextResponse } from "next/server";

export async function GET(request: any) {
  const searchParams = new URL(request.url);

  const address = searchParams.searchParams.get("address");
  const latitude = searchParams.searchParams.get("lat");
  const longitude = searchParams.searchParams.get("lon");

  const apiKey = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY;

  let url = "";
  if (address) {
    url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      address +
      "&appid=" +
      apiKey;
  } else {
    url =
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
      latitude +
      "&lon=" +
      longitude +
      "&appid=" +
      apiKey;
  }

  const response = await fetch(url);

  const data = await response.json();
  return NextResponse.json({ data });
}
