import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountry, setVisitesCountry] = useState([])
    const [flag,setFlag]= useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
        .then(data=>setCountries(data))
    }, [])
    
    const handleVisitedCountry = (country) => {
        const newVisitedCountry = [...visitedCountry, country]
        setVisitesCountry(newVisitedCountry)
    }

    const handleFlag = (flagsShow) => {
        const newFlag = [...flag, flagsShow]
        setFlag(newFlag)
    }

    return (
        <div>
            <h2>Total Country : {countries.length}</h2>
            <div>
                <h3>Visited Country: {visitedCountry.length}</h3>
                <div className="visitedFlag">
            {
                flag.map((flagImg,idx)=><img key={idx} src={flagImg}></img>)
                    
            }
            </div>
                <ul>
                    {visitedCountry.map(country => <li key={country.cca3}>{ country.name.common}</li>)}
                </ul>
            </div>
            
            <div className="countries">
            {
                    countries.map(country => <Country key={countries.cca3} handleVisitedCountry={handleVisitedCountry} handleFlag={ handleFlag} country={ country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;