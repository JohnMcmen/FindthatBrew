import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BrewDetail = () => {
  const [brewery, setBrewery] = useState({});
  let { name } = useParams();

  useEffect(() => {
    const fetchBrewery = async () => {
      try {
        const response = await axios.get(`https://api.openbrewerydb.org/v1/breweries?by_name=${name}`);
        setBrewery(response.data[0]);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
  
    fetchBrewery();
  }, [name]);

  return (
    <div className='title-container'>
    <h1>Learn More Details</h1>
    <h2>Click The Location Below to Visit their Website!</h2>
    --------------------------------------------------------------------------------------------------------
      <div className="content-container">
        <h2><a href={brewery.website_url} target="_blank" rel="noopener noreferrer">
          {brewery.name}</a>
        </h2>
        <p>{brewery.city}, {brewery.state}</p>
        <p>{brewery.street}</p>
        <p>{brewery.phone}</p>
      </div>
    </div>
  );  
}
export default BrewDetail;