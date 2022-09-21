import useCountries from '../../hooks/useCountries';
import CountryCard from '../CountryCard/CountryCard';
import Filter from '../Filter/Filter';

export default function Main() {
  
  const { 
    filterCountries, 
    continent, 
    setContinent, 
    search, 
    setSearch, 
    order, 
    setOrder
  } = useCountries();

  return (
    <main>
      <h2>Flags Across the World!</h2>

      <Filter 
        continent={continent} 
        setContinent={setContinent}
        search={search} 
        setSearch={setSearch}
        order={order} 
        setOrder={setOrder}
      />


      <div className='flag-display'>
        {filterCountries().map((countries) => (
          <CountryCard key={countries.id} {...countries} />
        ))}
      </div>
    </main>
  );
}