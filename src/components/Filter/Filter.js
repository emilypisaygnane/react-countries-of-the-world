export default function Filter({ continent, setContinent, error }) {
  return (
    <>    
      <p className='error'>{error}</p>
      <select 
        className="filter"
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
    </>
  );
}