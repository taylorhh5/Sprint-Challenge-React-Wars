import React, { useState, useEffect } from "react";
import axios from "axios";
import StarCard from "./StarCards.js"

export default function StarW () {
    const [info, setInfo] = useState ([]);
    
    useEffect (()=> {
    axios
    .get (`https://swapi.co/api/people/`)
    .then (response => {
        console.log (response);
        
        const allData = response.data.results;
        setInfo (allData);
    });
    }, []);
    

    return (

    <div className="dataContain">
      {info.map(person=> (

       <StarCard
       name={person.name}
       gender={person.gender}
       birth={person.birth_year}
       key={person.url}
       />
    ))}
    
    </div>
    )
    }
    