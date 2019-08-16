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
        console.log ("hello")
      
        const allData = response.data.results;
         setInfo (allData);
    });
    }, []);
    

    return (

        <div className="dataContain">
      
    <StarCard  name={info.name} /> 


        </div>
    )
    }
    