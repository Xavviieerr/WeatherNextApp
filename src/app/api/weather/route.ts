import { NextRequest, NextResponse } from "next/server";

export async function GET(request: any) {
  const searchParams = new URL(request.url);
  console.log(searchParams);
  const address = searchParams.searchParams.get("address");
  const latitude = searchParams.searchParams.get("lat");
  const longitude = searchParams.searchParams.get("lon");

  let url = "";
  if (address) {
    url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      address +
      "&appid=" +
      "a1facf01945d6bad6c26c610489d5a74";
  } else {
    url =
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
      latitude +
      "&lon=" +
      longitude +
      "&appid=" +
      "a1facf01945d6bad6c26c610489d5a74";
  }

  const response = fetch(url);
  const data = (await response).json();
  return NextResponse.json({ data });
}
