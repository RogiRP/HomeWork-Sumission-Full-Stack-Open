import axios from 'axios'

const apiKey = import.meta.env.VITE_OPENWEATHER_KEY

const getWeather = (capital) => {
  console.log('API key:', apiKey)

  const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'

  return axios
    .get(`${baseUrl}?q=${capital}&appid=${apiKey}&units=metric`)
    .then(response => response.data)
}

export default { getWeather }