import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Card = () => {
    const [characters, setcharacters] = useState([])

    useEffect(()=> {
        axios.get(`https://valorant-api.com/v1/agents?language=tr-TR&isPlayableCharacter=true`)
          .then(res => {
            setcharacters(res.data.data);
          })
    }, [])
    
    
  return (
    <div className='flex flex-wrap m-4'>
      {characters.map((character,index)=>{
        return(
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4"><img src={character.displayIconSmall} alt="" width="150px" />
          <div className="px-6 py-4 ">

            <div className="font-bold text-xl mb-2">
              {character.displayName}
            </div>
            <p className="text-gray-700 text-base">
              {character.description}
            </p>
          </div>
          
          </div>
        )
      })}
    </div>
  )
}

export default Card