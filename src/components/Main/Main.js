import useCountries from '../../hooks/useCountries';
import CountryCard from '../CountryCard/CountryCard';
import Filter from '../Filter/Filter';
import Search from '../Search/Search';

export default function Main() {
  
  const { 
    filterCountries, 
    continent, 
    setContinent, 
    search, 
    setSearch, 
    error
  } = useCountries();

  return (
    <>
      <p>{error}</p>
      <main>
        <h2>Flags Across the World!</h2>

        <Search 
          search={search} 
          setSearch={setSearch} 
        />

        <Filter 
          continent={continent} 
          setContinent={setContinent}
        />


        <div className='flag-display'>
          {filterCountries().map((countries) => (
            <CountryCard key={countries.id} {...countries} />
          ))}
        </div>
      </main>
    </>
  );
}