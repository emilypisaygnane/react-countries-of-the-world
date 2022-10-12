import { fetchCountries } from '../services/countries';
import { useState, useEffect } from 'react';

export default function useCountries() {
  const [countries, setCountries] = useState([]);
  const [continent, setContinent] = useState('all');
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('None');

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

    const filteredArray = continentArray.filter((country) =>
      country.name.toLowerCase().includes(search.toLowerCase())
    );
    if (sort === 'Alphabetical') {
      filteredArray.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    }
    if (sort === 'Reverse') {
      filteredArray.sort((a, b) => {
        if (b.name < a.name) {
          return -1;
        }
        if (b.name > a.name) {
          return 1;
        }
        return 0;
      });
    }
    return filteredArray;
  };

  return { filterCountries, continent, setContinent, error, search, setSearch, sort, setSort };

}