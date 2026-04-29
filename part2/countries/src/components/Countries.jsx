import Country from './Country'

const Countries = ({ countriesToShow, setFilter }) => {
  if (countriesToShow.length > 10) {
    return <div>Too many matches, specify another filter</div>
  }

  if (countriesToShow.length > 1) {
    return (
      <div>
        {countriesToShow.map(country => (
          <div key={country.cca3}>
            {country.name.common}{' '}
            <button onClick={() => setFilter(country.name.common)}>
              Show
            </button>
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