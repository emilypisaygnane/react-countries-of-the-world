import useCountries from '../../hooks/useCountries';
import CountryCard from '../CountryCard/CountryCard';
import Filter from '../Filter/Filter';

export default function Main() {
  const { filterCountries, continent, setContinent } = useCountries();
  return (
    <main>
      <h2> Flags Across the World!</h2>
      <Filter continent={continent} setContinent={setContinent} />
      <div>
        {filterCountries().map((countries) => (
          <CountryCard key={countries.id} {...countries} />
        ))}
      </div>
    </main>
  );
}