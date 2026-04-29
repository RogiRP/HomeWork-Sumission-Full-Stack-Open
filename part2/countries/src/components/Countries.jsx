import Country from './Country'

const Countries = ({ countriesToShow }) => {
  if (countriesToShow.length > 10) {
    return <div>Too many matches, specify another filter</div>
  }

  if (countriesToShow.length > 1) {
    return (
      <div>
        {countriesToShow.map(country => (
          <div key={country.cca3}>
            {country.name.common}
          </div>
        ))}
      </div>
    )
  }

  if (countriesToShow.length === 1) {
    return <Country country={countriesToShow[0]} />
  }

  return null
}

export default Countries