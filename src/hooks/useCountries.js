import { fetchCountries } from '../services/countries';
import { useState, useEffect } from 'react';

export default function useCountries() {
  const [countries, setCountries] = useState([]);
  const [continent, setContinent] = useState('all');

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCountries();
      setCountries(data);
    }
  
    fetchData();
  
  }, []);

  const filterCountries = () => {
    if (continent === 'all')
      return countries;
    return countries.filter((countries) => countries.continent === continent);

  };

  return { filterCountries, continent, setContinent };

}