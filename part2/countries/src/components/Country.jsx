const Country = ({ country }) => {
  const languages = Object.values(country.languages)

  return (
    <div>
      <h1>{country.name.common}</h1>

      <p>
        Capital {country.capital?.[0]}<br />
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
    </div>
  )
}

export default Country