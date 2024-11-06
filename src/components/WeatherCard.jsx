import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import {
  ArrowDownToDot,
  Droplet,
  Gauge,
  Sunrise,
  Sunset,
  Thermometer,
  ThermometerIcon,
  ThermometerSnowflake,
  ThermometerSun,
  Wind,
} from "lucide-react";
import moment from "moment";

export function WeatherCard({ weather }) {
  // console.log(weather)
  return (
    <div className="">
      <Card className="w-fit">
        <CardHeader>
          <CardTitle>
            {weather.name}, <span>{weather.sys?.country}</span>
          </CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent className="gap-8 p-10 grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 ">
          <div className="border border-black w-full rounded-lg p-3 flex justify-center items-center flex-col">
            <img
              className=""
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <p className=" font-bold">{weather.weather[0].description}</p>
          </div>
          <div className="border border-black w-full gap-5 rounded-lg p-3 flex justify-center items-center flex-col">
            <span className="flex flex-row gap-2 py-6 font-bold">
              <ThermometerSun />
              {weather.main.temp_max} &deg;C
            </span>
            <span className="flex flex-row gap-2 py-6 font-bold">
              <ThermometerSnowflake />
              {weather.main.temp_min} &deg;C
            </span>
          </div>
          <div className="border border-black w-full rounded-lg p-3 flex justify-center items-center flex-col">
            <span className="flex flex-row gap-2 py-6 ">
              <ArrowDownToDot />
              Pressure
            </span>
            <p className=" font-bold">{weather.main.pressure} Pa</p>
          </div>
          <div className="border border-black w-full rounded-lg p-3 flex justify-center items-center flex-col">
            <span className="flex flex-row gap-2 py-6">
              <Droplet />
              Humidity
            </span>
            <p className=" font-bold">{weather.main.humidity} g/m3</p>
          </div>
          <div className="border border-black w-full rounded-lg p-3 flex justify-center items-center flex-col">
            <span className="flex flex-row gap-2 py-6">
              <Thermometer />
              Feels Like
            </span>
            <p className=" font-bold">{weather.main.feels_like} &deg;C</p>
          </div>
          <div className="border border-black w-full rounded-lg p-3 flex justify-center items-center flex-col">
            <span className="flex flex-row gap-2 py-3">
              <Wind />
              Wind Speed
            </span>
            <p className=" font-bold">{weather.wind.speed} km/h </p>
            <span className="flex flex-row gap-2 py-3">
              <Gauge />
              Wind Direction
            </span>
            <p className=" font-bold">{weather.wind.deg} &deg;</p>
          </div>
          <div className="border border-black w-full gap-5 rounded-lg p-3 flex justify-center items-center flex-col">
            <span className="flex flex-row gap-2 py-6 font-bold">
              <Sunrise />
              {moment.unix(weather.sys.sunrise).format('HH:mm:ss')} 
            </span>
            <span className="flex flex-row gap-2 py-6 font-bold">
              <Sunset />
              {moment.unix(weather.sys.sunset).format('HH:mm:ss')}
            </span>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex flex-row justify-between w-full gap-1 font-thin text-sm">
            <div>{moment().format("DD  MMM  YY")}</div>
            <div>
              <p>
                "{weather.coord?.lat}, {weather.coord?.lon}"
              </p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
