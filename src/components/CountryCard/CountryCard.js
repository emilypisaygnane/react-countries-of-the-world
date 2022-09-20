import React from 'react';
import './CountryCard.css';

export default function CountryCard({ name, iso2 }) {

  return (
    <div className = 'CountryContainer'>
      <h3 className='CountryTitle'>{name}</h3>
      <img
        src={`https://flagcdn.com/16x12/${iso2.toLowerCase()}.png`}

        srcSet={`https:/flagcdn.com/32x24/${iso2.toLowerCase()}.png 2x,
      https://flagcdn.com/48x36/${iso2.toLowerCase()}.png 3x`}
        
        width="32"
        height="24"
        alt={`${name}`}
      />
    </div>
  );
}