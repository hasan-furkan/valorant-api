import React, { useEffect, useState } from 'react';
import  './card.css';
import axios from 'axios';
import { Link } from "react-router-dom";

const Card = () => {
    const [characters, setcharacters] = useState([])

    useEffect(()=> {
        axios.get(`https://valorant-api.com/v1/agents?language=tr-TR&isPlayableCharacter=true`)
          .then(res => {
            setcharacters(res.data.data);
          })
    }, [])
    
    
    const title = "Valorant Oyun İçi Bilgiler"
  return (
    <div className='cardComponent'>
        <div className='header'>
        <h1 className="header-title">
            {title}
        </h1>
        <nav>
        <Link to="/weapon">Weapons</Link>

        </nav>
        </div>
       <div className="cardFlex">
       {characters.map((character, index) => {
           return  <div key={index} className="cardDesign">
           <div className="cardImage">
               <img src={character.displayIcon} alt="" />
           </div>
           <div className="cardTitle">
               {character.displayName}
           </div>
           <div className="cardDesc">
               {character.description}
           </div>
           
       </div>
       })}
       </div>
    </div>
  )
}

export default Card