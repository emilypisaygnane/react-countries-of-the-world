import '../Filter/Filter.css';


export default function Filter({ continent, setContinent, error, sort, setSort }) {
  
  return (
    <>    
      <p className='error'>{error}</p>
      <p>Sort by:</p>
      <select
        className="sort"
        value={sort}
        onChange={(e) => setSort(e.target.value)}>

        Sort:
        <option value="None">All</option>
        <option value="Alphabetical">A-Z</option>
        <option value="Reverse">Z-A</option>
      </select>

      <p>Filter by Continent:</p>
      <select 
        className="option-filter"
        value={continent}
        onChange={(e) => {
          setContinent(e.target.value);
        }}
      >
        <option value="all">All</option>
        <option value="Oceania">Oceania</option>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
        <option value="North America">North America</option>
        <option value="Antarctica">Antarctica</option>
        <option value="South America">South America</option>
        <option value="Asia">Asia</option>

      </select>
      {/* 
      <label className="flag-filter">
        <p>Search for Flag:</p>
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value); 
          }}
        />
      </label>

      <p>Sort Alphabetically:</p>
      <select
        className="alpha-filter"
        value={order}
        onChange={(e) => {
          setOrder(e.target.value);
        }}
      >

        <option value="default">Default</option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select> */}
    </>
  );
}