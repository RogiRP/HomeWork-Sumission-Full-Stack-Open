import { useState, useEffect } from 'react'
import weatherService from '../services/weather'

const Country = ({ country }) => {
  const [weather, setWeather] = useState(null)

  const capital = country.capital?.[0]
  const languages = Object.values(country.languages)

  useEffect(() => {
    if (capital) {
      weatherService.getWeather(capital)
        .then(weatherData => {
          setWeather(weatherData)
        })
    }
  }, [capital])

  weatherService.getWeather(capital)
  .then(weatherData => {
    setWeather(weatherData)
  })
  .catch(error => {
    console.log('Error loading weather:', error.response?.data || error.message)
  })

  return (
    <div>
      <h1>{country.name.common}</h1>

      <p>
        Capital {capital}<br />
        Area {country.area}
      </p>

      <h2>Languages</h2>

      <ul>
        {languages.map(language => (
          <li key={language}>{language}</li>
        ))}
      </ul>

      <img
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
        width="300"
      />

      {weather && (
        <div>
          <h2>Weather in {capital}</h2>

          <p>
            Temperature {weather.main.temp} Celsius
          </p>

          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />

          <p>
            Wind {weather.wind.speed} m/s
          </p>
        </div>
      )}
    </div>
  )
}

export default Country