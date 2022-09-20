import React from 'react';
import './CountryCard.css';

export default function CountryCard({ name, iso2 }) {

  return (
    <div className = 'CountryContainer'>
      <h3 className='CountryTitle'>{name}</h3>
      <img
        src={`https://flagcdn.com/72x54/${iso2.toLowerCase()}.png`}

        srcSet={`https:/flagcdn.com/72x54/${iso2.toLowerCase()}.png 2x,
      https://flagcdn.com/72x54/${iso2.toLowerCase()}.png 3x`}
        
        width="72"
        height="54"
        alt={`${name}`}
      />
    </div>
  );
}