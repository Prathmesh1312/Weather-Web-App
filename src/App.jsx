import { Input } from "@/ui/input";
import { Button } from "@/ui/button";
import { useState } from "react";
import "./App.css";
import { WeatherCard } from "./components/WeatherCard";
import axios from "axios";
import { LoaderIcon } from "lucide-react";
import { toast } from "sonner";


function App() {
  const [input, setInput] = useState("");
  const [unit, setunit] = useState("metric");
  const [weather, setWeather] = useState({
    loading: false,
    data: {},
    error: false,
  });

  const Search = async () => {
    setWeather({ ...weather, loading: true });

    const url_weather = "https://api.openweathermap.org/data/2.5/weather";
    await axios
      .get(url_weather, {
        params: {
          q: input,
          units: "metric",
          appid: import.meta.env.VITE_API_KEY,
        },
      })
      .then((res) => {
        setWeather({ data: res.data, loading: false, error: false });
      })
      .catch((error) => {
        setWeather({ ...weather, data: {}, error: true });
        setInput("");
        console.log(error.response?.status);
        if (error.response?.status == 400){
          toast("Error : 400 - INVAID City Name.")
        }
        if (error.response?.status == 401){
          toast("Error : 401 - Unauthorized.")
        }
        if (error.response?.status == 404){
          toast("Error : 404 - Not Found")
        }
        if (error.response?.status == 4029){
          toast("Error : 429 - Too Many Requests.")
        }

      });
  };

  return (
    <div className="h-full">
      <div className="flex flex-col  justify-center items-center p-5 ">
        <div className="flex w-full max-w-4xl items-center space-x-2 p-3 ">
          <Input
            type="text"
            placeholder="Enter City Name"
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(e) => {
              e.key === "Enter" ? Search() : null;
            }}
            className="shadow-lg"
          />
          <Button
            type="submit"
            onClick={() => {
              Search();
            }}
          >
            Search
          </Button>
        </div>
      </div>
      {weather && weather.data && weather.data.main ? (
        <div className="grid grid-flow-row gap-3 flex-col  justify-center items-center p-5 ">
          <WeatherCard weather={weather.data} />
        </div>
      ) : (
        <div className=" text-4xl sm:text-7xl font-bold flex justify-center items-center flex-col my-40 ">
          <h2>Search City Name for </h2> <br />{" "}
          <h2>
            a Weather <span className="text-8xl">⛅</span>
          </h2>
        </div>
      )}
      {weather.loading ? <LoaderIcon /> : null}
    </div>
  );
}

export default App;
