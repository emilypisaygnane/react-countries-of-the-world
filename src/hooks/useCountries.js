import { fetchCountries } from '../services/countries';
import { useState, useEffect } from 'react';

export default function useCountries() {
  const [countries, setCountries] = useState([]);
  const [continent, setContinent] = useState('all');
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchCountries();
        setCountries(data);
      } catch (e) {
        setError('Uh Oh, Something Went Wrong D:');
      }
    }
    fetchData();
  
  }, []);

  const filterCountries = () => {
    const continentArray = countries.filter((country) => {
      if (continent === 'all')
        return true;
      return country.continent === continent;
    });

    return continentArray.filter((country) =>
      country.name.toLowerCase().includes(search.toLowerCase())
    );

  };

  return { filterCountries, continent, setContinent, error, search, setSearch };

}