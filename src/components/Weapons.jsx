import React, { useEffect, useState } from "react";
import axios from "axios";
import "./card.css";

const Ability = () => {
  const [weapons, setWeapons] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://valorant-api.com/v1/weapons?language=tr-TR&isPlayableCharacter=true"
      )
      .then((res) => {
        setWeapons(res.data.data);
      });
  }, []);

  return (
    <div className="cardFlex">
      {weapons.map((weapon, index) => {
        return (
          <div key={index} className="cardDesign">
            <div className="cardImage">
              <img src={weapon.displayIcon} alt="" />
            </div>
            <div className="cardTitle">{weapon.displayName}</div>
            <div className="cardDesc">{weapon.description}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Ability;
