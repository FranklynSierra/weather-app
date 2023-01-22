
import './App.css';
import { useState } from 'react';
import Search from './components/search/search';
import CurrentWater from './components/current-weater/current-water';
import Searchcity from './components/SearchCity/searchcity';
import { weather_Api_key, weather_Api2 } from './components/api';
import Forecast from './components/forecast/forecast';
function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  function handleSubmit(searchData) {
    const [lat, lon] = searchData.value.split('')
    const currentWeatherFetch = fetch(`${weather_Api2}/weather?lat=${lat}&lon=${lon}&appid=${weather_Api_key}&units=metric`)
    const forecastFetch = fetch(`${weather_Api2}forecast?lat=${lat}&lon=${lon}&appid=${weather_Api_key}&units=metric`)
    Promise.all([currentWeatherFetch, forecastFetch]).then(async (res) => {
      const weatherResponse = await res[0].json()
      const forecastResponse = await res[1].json()
      setCurrentWeather({ city: searchData.label, ...weatherResponse })
      setForecast({ city: searchData.label, ...forecastResponse })
    }).catch((err) => console.log(err))

  }


  return (
    <div className="container">
      <Search onSeachChange={handleSubmit}></Search>
      {currentWeather && <CurrentWater data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    {!currentWeather&&<Searchcity/>}
   
    </div>
  );
}

export default App;
