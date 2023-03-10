import React from 'react';
import './Country.css'

const Country = ({country}) => {
    const {area, population, region, name, flags} = country
    return (
        <div className='Country'>
            <h2>Country Name : {name.common}</h2>
            <img src={flags.png} alt="" />
            <h3>Population : {population}</h3>
            <p>Area : {area}</p>
            <p><small>Region : {region}</small></p>
        </div>
    );
};

export default Country;