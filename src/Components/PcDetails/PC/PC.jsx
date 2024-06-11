import React from 'react';
import "../PC/PC.css";
import { GrFavorite } from "react-icons/gr";
import pcData from "../../../pcData.json";

function PC() {
  // Utilisez les données importées du fichier JSON
  const laptops = pcData;

  return (
    <>
      {laptops.map(({ Image, Name, seller, Price }, index) => {
        return (
          <div className="flex-details-2-info" key={index}>
            <div className="flex-group-1">
              <img src={Image} className="flex-details-2-img" alt={Name} />
              <div className="flex-details-2-view">
                <p className="PC-detail-2-pc-Name">{Name}</p>
                <p className="PC-detail-2-pc-Marque">{seller}</p>
                <div className="PC-detail-2-pc-icon-view">
                  <button type='submit' className="PC-detail-2-pc-view">View </button>
                  <p className="PC-detail-2-pc-icon">
                    <GrFavorite />
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-group-2">
              <p className="flex-details-2-price">{Price}</p>
              <p className="flex-details-2-tnd">TND</p>
            </div>
          </div>
        )
      })}
    </>
  );
}

export default PC;
