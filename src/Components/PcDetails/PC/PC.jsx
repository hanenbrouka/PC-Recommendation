import React from 'react';
import "../PC/PC.css";
import { GrFavorite } from "react-icons/gr";
import PClogo1 from "../../LandingPage/Image/Logo (1).png"
import PClogo2 from "../../LandingPage/Image/Logo (2).png";
import PClogo3 from "../../LandingPage/Image/Logo (3).png";
import PClogo4 from "../../LandingPage/Image/Logo (4).png";
import PClogo5 from "../../LandingPage/Image/Logo (5).png";


function PC() {
 const laptopFeatures = [
  {
    laptopImg: PClogo1,
    laptopName: 'Dell Vostro 3400',
    marqueName: 'Mytek',
    price: '959,0',
  },
  {
    laptopImg: PClogo2,
    laptopName: 'ASUS ExpertBook L1',
    marqueName: 'Mytek',
    price: '1159,0',
  },
  {
    laptopImg: PClogo3,
    laptopName: 'Dell Vostro 3510',
    marqueName: 'Scoop Informatique',
    price: '1199,0',
  },
  {
    laptopImg: PClogo4,
    laptopName: 'Dell Latitude 3520',
    marqueName: 'Mytek',
    price: '1349,0',
  },

  {
    laptopImg: PClogo5,
    laptopName: 'HP ProBook 450 G80',
    marqueName: 'Mega PC',
    price: '1399,0',
  },
 
]

  return (
    <>
      {laptopFeatures.map(({ laptopImg, laptopName, marqueName, price }) => {
        return (
          <div className="flex-details-2-info">
            <div className="flex-group-1">
              <img src={laptopImg} className="flex-details-2-img" />
              <div className="flex-details-2-view">
                <p className="PC-detail-2-pc-Name">{laptopName}</p>
                <p className="PC-detail-2-pc-Marque">{marqueName}</p>
                <div className="PC-detail-2-pc-icon-view">
                  <button type='submit' className="PC-detail-2-pc-view">View </button>
                  <p className="PC-detail-2-pc-icon">
                    <GrFavorite />
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-group-2">
              <p className="flex-details-2-price">{price}</p>
              <p className="flex-details-2-tnd">TND</p>
            </div>
          </div>
        )
      })}
    </>
  )
}
export default PC;