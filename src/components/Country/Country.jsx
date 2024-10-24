import { useState } from 'react';
import './Country.css'

const Country = ({ country,handleVisitedCountry,handleFlag }) => {
    const { name, capital, region, population, flags } = country
    
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited)
    }    

    return (
        <div className={visited?'visited-country':'country'}>
            <img src={flags.png} alt="coutry flag" />
            <h3>{name.common}</h3>
            <p><span>Capital:</span> {capital }</p>
            <p><span>Region:</span> {region }</p>
            <p><span>Population:</span> {population}</p>
            <div className='buttonContainer'>
            <button onClick={()=>handleVisitedCountry(country)}>Mark as VISITED</button><br />
            <button onClick={()=>handleFlag(country.flags.png)}>Add Flag</button>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Visit'}</button>
            {visited ? ' Already Visited' : ''}
            </div>
        </div>
    );
};

export default Country;