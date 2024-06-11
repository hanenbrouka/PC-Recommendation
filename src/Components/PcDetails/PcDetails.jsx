import React from "react";
import "../PcDetails/PcDetails.css";
import { GrFavorite } from "react-icons/gr";
import { FiShare2 } from "react-icons/fi";
import { TbPointFilled } from "react-icons/tb";
import { AiOutlineFileDone } from "react-icons/ai";
import pcData from "../../pcData.json";

function PcDetails() {
  const laptop = pcData[0]; // Accéder directement à l'objet laptop
  const ficheTechniqueData = [
    { label: "Processeur", value: laptop.CPU },
    { label: "Type Processeur", value: laptop["CPU Type"] },
    { label: "Mémoire", value: `${laptop.RAM} Go` },
    { label: "Stockage", value: laptop.Storage },
    { label: "Carte Graphique", value: laptop.GPU },
    { label: "Couleur", value: laptop.color },
    { label: "Garantie", value: laptop.Garantie },
    { label: "  Systéme d'exploitation", value: laptop["Systéme d'exploitation"] },
    { label: "Garantie", value: laptop.Garantie }
  ];


  return (
    <div className="flex-details-1">
      <div className="flex-details-1-price">
        <p className="PC-detail-price">{laptop.Price}</p>
        <p className="PC-detail-currency">TND</p>
      </div>
      <img src={laptop.Image} className="images-detail-1" alt={laptop.Name} />
      <div className="flex-details-1-name-icon">
        <p className="flex-details-1-name">{laptop.Name}</p>
        <div className="flex-details-1-icon">
          <span className="PC-detail-icon1"><GrFavorite /></span>
          <p className="PC-detail-icon2"><FiShare2 /></p>
        </div>
      </div>
      <div className="flex-details-1-marque-category">
        <div className="flex-details-1-marque">
          <p className="flex-details-marque">{laptop.seller}</p>
          <p className="PC-detail-marque-point"><TbPointFilled /></p>
          <p className="PC-detail-stock">{laptop.Availability}</p>
          <p className="PC-detail-stock-icon"><AiOutlineFileDone /></p>
        </div>
        <div className="flex-details-1-category">
          <p className="flex-details-category">PC category</p>
          <p className="PC-detail-category-point"><TbPointFilled /></p>
          <p className="PC-detail-category-icon">{laptop.category}</p>
        </div>
      </div>
      <div className="flex-details-1-pc-features">
        <div className="flex-pc-features1">
          <p>Écran</p>
          <p className="bold-features">{laptop['Taille écran']}</p>
        </div>
        <div className="flex-pc-features2">
          <p>Processeur</p>
          <p className="bold-features">{laptop.CPU}</p>
        </div>
        <div className="flex-pc-features3">
          <p>Mémoire RAM</p>
          <p className="bold-features">{laptop.RAM} Go</p>
        </div> 
        <div className="flex-pc-features4">
          <p>Disque dur</p>
          <p className="bold-features">{laptop.Storage}</p>
        </div>
      </div>
      <div className="flex-details-1-overview">
        <p className="overview-title">Overview</p>
        <p className="overview-content">{laptop.Description}</p>
      </div>
      <div className="flex-details-1-fiche-Technique">
        <p className="fiche-Technique-Name">Technical sheet</p>
        {ficheTechniqueData.map((item, index) => (
          <div key={index} className="pc-description-flex">
            <p className="pc-description-circle"></p>
            <p>{item.label}: {item.value}</p>
          </div>
        ))}
      </div>
      <div className="flex-details-1-Interested-btn">
        <p className="flex-details-1-Interested">Are you Interested in this Laptop?</p>
        <button className="flex-details-1-btn" onClick={() => window.location.href = laptop.Link}>Check it out</button>
      </div>
    </div>
  );
}

export default PcDetails;
