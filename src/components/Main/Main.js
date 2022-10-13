import useCountries from '../../hooks/useCountries';
import CountryCard from '../CountryCard/CountryCard';
import Filter from '../Filter/Filter';
import Search from '../Search/Search';
import './Main.css';

export default function Main() {
  
  const { 
    loading,
    filterCountries, 
    continent, 
    setContinent, 
    search, 
    setSearch, 
    sort,
    setSort,
    error
  } = useCountries();

  if (loading) {
    return <div className="loader"></div>;}

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
          sort={sort}
          setSort={setSort}
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