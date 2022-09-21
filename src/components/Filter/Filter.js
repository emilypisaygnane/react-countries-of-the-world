import '../Filter/Filter.css';


export default function Filter({ 
  continent, setContinent,
  error,
//   search, setSearch,
//   order, setOrder
}) {
  return (
    <>    
      <p className='error'>{error}</p>
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