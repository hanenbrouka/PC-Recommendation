import React from "react";
import "../PcCard/PcCard.css";
import logo1 from "../../LandingPage/Image/logo1.png";
import { GrFavorite } from "react-icons/gr";

// import NombrePc from "../NombrePc/NombrePc";

function PcCard() {
  // Tableau des informations sur chaque carte PC
  const pcCardsData = [
    {
      title: "ASUS ExpertBook L1",
      description:
        "Écran 14' HD - Processeur: Intel Core i3-1115G4 (3.00 GHz up to 4,10 GHz Turbo max , 6 Mo de mémoire cache, Dual-Core) - Système d'exploitation: FreeDos - Mémoire RAM: 4 Go - Disque dur: 1 To HDD - Carte graphique: Intel HD Graphics avec WiFi, Bluetooth, 1x USB 2.0 Type-A, 2x USB 3.2 Gen 1 Type-A, 1x HDMI 1.4,1x RJ-45, 1 prise jack pour casque 3.5 mm - Couleur: Noir - Garantie: 1 an",
      types: ["Gaming"],
      availability: "Mytek : En Stock",
      score:["score"]
    },
    {
      title: "ASUS ExpertBook L1",
      description:
        "Écran 14' HD - Processeur: Intel Core i3-1115G4 (3.00 GHz up to 4,10 GHz Turbo max , 6 Mo de mémoire cache, Dual-Core) - Système d'exploitation: FreeDos - Mémoire RAM: 4 Go - Disque dur: 1 To HDD - Carte graphique: Intel HD Graphics avec WiFi, Bluetooth, 1x USB 2.0 Type-A, 2x USB 3.2 Gen 1 Type-A, 1x HDMI 1.4,1x RJ-45, 1 prise jack pour casque 3.5 mm - Couleur: Noir - Garantie: 1 an",
      types: ["Gaming", "Ultrabook", "Portable"],
      availability: "Mytek : En Stock",
    },
    {
      title: "ASUS ExpertBook L1",
      description:
        "Écran 14' HD - Processeur: Intel Core i3-1115G4 (3.00 GHz up to 4,10 GHz Turbo max , 6 Mo de mémoire cache, Dual-Core) - Système d'exploitation: FreeDos - Mémoire RAM: 4 Go - Disque dur: 1 To HDD - Carte graphique: Intel HD Graphics avec WiFi, Bluetooth, 1x USB 2.0 Type-A, 2x USB 3.2 Gen 1 Type-A, 1x HDMI 1.4,1x RJ-45, 1 prise jack pour casque 3.5 mm - Couleur: Noir - Garantie: 1 an",
      types: ["Gaming", "Ultrabook", "Portable"],
      availability: "Mytek : En Stock",
    },
    {
      title: "ASUS ExpertBook L1",
      description:
        "Écran 14' HD - Processeur: Intel Core i3-1115G4 (3.00 GHz up to 4,10 GHz Turbo max , 6 Mo de mémoire cache, Dual-Core) - Système d'exploitation: FreeDos - Mémoire RAM: 4 Go - Disque dur: 1 To HDD - Carte graphique: Intel HD Graphics avec WiFi, Bluetooth, 1x USB 2.0 Type-A, 2x USB 3.2 Gen 1 Type-A, 1x HDMI 1.4,1x RJ-45, 1 prise jack pour casque 3.5 mm - Couleur: Noir - Garantie: 1 an",
      types: ["Gaming", "Ultrabook", "Portable"],
      availability: "Mytek : En Stock",
    },
    {
      title: "ASUS ExpertBook L1",
      description:
        "Écran 14' HD - Processeur: Intel Core i3-1115G4 (3.00 GHz up to 4,10 GHz Turbo max , 6 Mo de mémoire cache, Dual-Core) - Système d'exploitation: FreeDos - Mémoire RAM: 4 Go - Disque dur: 1 To HDD - Carte graphique: Intel HD Graphics avec WiFi, Bluetooth, 1x USB 2.0 Type-A, 2x USB 3.2 Gen 1 Type-A, 1x HDMI 1.4,1x RJ-45, 1 prise jack pour casque 3.5 mm - Couleur: Noir - Garantie: 1 an",
      types: ["Gaming", "Ultrabook", "Portable"],
      availability: "Mytek : En Stock",
    },
    {
      title: "ASUS ExpertBook L1",
      description:
        "Écran 14' HD - Processeur: Intel Core i3-1115G4 (3.00 GHz up to 4,10 GHz Turbo max , 6 Mo de mémoire cache, Dual-Core) - Système d'exploitation: FreeDos - Mémoire RAM: 4 Go - Disque dur: 1 To HDD - Carte graphique: Intel HD Graphics avec WiFi, Bluetooth, 1x USB 2.0 Type-A, 2x USB 3.2 Gen 1 Type-A, 1x HDMI 1.4,1x RJ-45, 1 prise jack pour casque 3.5 mm - Couleur: Noir - Garantie: 1 an",
      types: ["Gaming", "Ultrabook", "Portable"],
      availability: "Mytek : En Stock",
    }, {
      title: "ASUS ExpertBook L1",
      description:
        "Écran 14' HD - Processeur: Intel Core i3-1115G4 (3.00 GHz up to 4,10 GHz Turbo max , 6 Mo de mémoire cache, Dual-Core) - Système d'exploitation: FreeDos - Mémoire RAM: 4 Go - Disque dur: 1 To HDD - Carte graphique: Intel HD Graphics avec WiFi, Bluetooth, 1x USB 2.0 Type-A, 2x USB 3.2 Gen 1 Type-A, 1x HDMI 1.4,1x RJ-45, 1 prise jack pour casque 3.5 mm - Couleur: Noir - Garantie: 1 an",
      types: ["Gaming", "Ultrabook", "Portable"],
      availability: "Mytek : En Stock",
    },
    {
      title: "ASUS ExpertBook L1",
      description:
        "Écran 14' HD - Processeur: Intel Core i3-1115G4 (3.00 GHz up to 4,10 GHz Turbo max , 6 Mo de mémoire cache, Dual-Core) - Système d'exploitation: FreeDos - Mémoire RAM: 4 Go - Disque dur: 1 To HDD - Carte graphique: Intel HD Graphics avec WiFi, Bluetooth, 1x USB 2.0 Type-A, 2x USB 3.2 Gen 1 Type-A, 1x HDMI 1.4,1x RJ-45, 1 prise jack pour casque 3.5 mm - Couleur: Noir - Garantie: 1 an",
      types: ["Gaming", "Ultrabook", "Portable"],
      availability: "Mytek : En Stock",
    },
    {
      title: "ASUS ExpertBook L1",
      description:
        "Écran 14' HD - Processeur: Intel Core i3-1115G4 (3.00 GHz up to 4,10 GHz Turbo max , 6 Mo de mémoire cache, Dual-Core) - Système d'exploitation: FreeDos - Mémoire RAM: 4 Go - Disque dur: 1 To HDD - Carte graphique: Intel HD Graphics avec WiFi, Bluetooth, 1x USB 2.0 Type-A, 2x USB 3.2 Gen 1 Type-A, 1x HDMI 1.4,1x RJ-45, 1 prise jack pour casque 3.5 mm - Couleur: Noir - Garantie: 1 an",
      types: ["Gaming", "Ultrabook", "Portable"],
      availability: "Mytek : En Stock",
    },
    {
      title: "ASUS ExpertBook L1",
      description:
        "Écran 14' HD - Processeur: Intel Core i3-1115G4 (3.00 GHz up to 4,10 GHz Turbo max , 6 Mo de mémoire cache, Dual-Core) - Système d'exploitation: FreeDos - Mémoire RAM: 4 Go - Disque dur: 1 To HDD - Carte graphique: Intel HD Graphics avec WiFi, Bluetooth, 1x USB 2.0 Type-A, 2x USB 3.2 Gen 1 Type-A, 1x HDMI 1.4,1x RJ-45, 1 prise jack pour casque 3.5 mm - Couleur: Noir - Garantie: 1 an",
      types: ["Gaming", "Ultrabook", "Portable"],
      availability: "Mytek : En Stock",
    },
    {
      title: "ASUS ExpertBook L1",
      description:
        "Écran 14' HD - Processeur: Intel Core i3-1115G4 (3.00 GHz up to 4,10 GHz Turbo max , 6 Mo de mémoire cache, Dual-Core) - Système d'exploitation: FreeDos - Mémoire RAM: 4 Go - Disque dur: 1 To HDD - Carte graphique: Intel HD Graphics avec WiFi, Bluetooth, 1x USB 2.0 Type-A, 2x USB 3.2 Gen 1 Type-A, 1x HDMI 1.4,1x RJ-45, 1 prise jack pour casque 3.5 mm - Couleur: Noir - Garantie: 1 an",
      types: ["Gaming", "Ultrabook", "Portable"],
      availability: "Mytek : En Stock",
    },
    {
      title: "ASUS ExpertBook L1",
      description:
        "Écran 14' HD - Processeur: Intel Core i3-1115G4 (3.00 GHz up to 4,10 GHz Turbo max , 6 Mo de mémoire cache, Dual-Core) - Système d'exploitation: FreeDos - Mémoire RAM: 4 Go - Disque dur: 1 To HDD - Carte graphique: Intel HD Graphics avec WiFi, Bluetooth, 1x USB 2.0 Type-A, 2x USB 3.2 Gen 1 Type-A, 1x HDMI 1.4,1x RJ-45, 1 prise jack pour casque 3.5 mm - Couleur: Noir - Garantie: 1 an",
      types: ["Gaming", "Ultrabook", "Portable"],
      availability: "Mytek : En Stock",
    },
    {
      title: "ASUS ExpertBook L1",
      description:
        "Écran 14' HD - Processeur: Intel Core i3-1115G4 (3.00 GHz up to 4,10 GHz Turbo max , 6 Mo de mémoire cache, Dual-Core) - Système d'exploitation: FreeDos - Mémoire RAM: 4 Go - Disque dur: 1 To HDD - Carte graphique: Intel HD Graphics avec WiFi, Bluetooth, 1x USB 2.0 Type-A, 2x USB 3.2 Gen 1 Type-A, 1x HDMI 1.4,1x RJ-45, 1 prise jack pour casque 3.5 mm - Couleur: Noir - Garantie: 1 an",
      types: ["Gaming", "Ultrabook", "Portable"],
      availability: "Mytek : En Stock",
    },
    {
      title: "ASUS ExpertBook L1",
      description:
        "Écran 14' HD - Processeur: Intel Core i3-1115G4 (3.00 GHz up to 4,10 GHz Turbo max , 6 Mo de mémoire cache, Dual-Core) - Système d'exploitation: FreeDos - Mémoire RAM: 4 Go - Disque dur: 1 To HDD - Carte graphique: Intel HD Graphics avec WiFi, Bluetooth, 1x USB 2.0 Type-A, 2x USB 3.2 Gen 1 Type-A, 1x HDMI 1.4,1x RJ-45, 1 prise jack pour casque 3.5 mm - Couleur: Noir - Garantie: 1 an",
      types: ["Gaming", "Ultrabook", "Portable"],
      availability: "Mytek : En Stock",
    },
    {
      title: "ASUS ExpertBook L1",
      description:
        "Écran 14' HD - Processeur: Intel Core i3-1115G4 (3.00 GHz up to 4,10 GHz Turbo max , 6 Mo de mémoire cache, Dual-Core) - Système d'exploitation: FreeDos - Mémoire RAM: 4 Go - Disque dur: 1 To HDD - Carte graphique: Intel HD Graphics avec WiFi, Bluetooth, 1x USB 2.0 Type-A, 2x USB 3.2 Gen 1 Type-A, 1x HDMI 1.4,1x RJ-45, 1 prise jack pour casque 3.5 mm - Couleur: Noir - Garantie: 1 an",
      types: ["Gaming"],
      availability: "Mytek : En Stock",
    },
    {
      title: "ASUS ExpertBook L1",
      description:
        "Écran 14' HD - Processeur: Intel Core i3-1115G4 (3.00 GHz up to 4,10 GHz Turbo max , 6 Mo de mémoire cache, Dual-Core) - Système d'exploitation: FreeDos - Mémoire RAM: 4 Go - Disque dur: 1 To HDD - Carte graphique: Intel HD Graphics avec WiFi, Bluetooth, 1x USB 2.0 Type-A, 2x USB 3.2 Gen 1 Type-A, 1x HDMI 1.4,1x RJ-45, 1 prise jack pour casque 3.5 mm - Couleur: Noir - Garantie: 1 an",
      types: ["Gaming"],
      availability: "Mytek : En Stock",
    },
    {
      title: "ASUS ExpertBook L1",
      description:
        "Écran 14' HD - Processeur: Intel Core i3-1115G4 (3.00 GHz up to 4,10 GHz Turbo max , 6 Mo de mémoire cache, Dual-Core) - Système d'exploitation: FreeDos - Mémoire RAM: 4 Go - Disque dur: 1 To HDD - Carte graphique: Intel HD Graphics avec WiFi, Bluetooth, 1x USB 2.0 Type-A, 2x USB 3.2 Gen 1 Type-A, 1x HDMI 1.4,1x RJ-45, 1 prise jack pour casque 3.5 mm - Couleur: Noir - Garantie: 1 an",
      types: ["Gaming"],
      availability: "Mytek : En Stock",
    },
    {
      title: "ASUS ExpertBook L1",
      description:
        "Écran 14' HD - Processeur: Intel Core i3-1115G4 (3.00 GHz up to 4,10 GHz Turbo max , 6 Mo de mémoire cache, Dual-Core) - Système d'exploitation: FreeDos - Mémoire RAM: 4 Go - Disque dur: 1 To HDD - Carte graphique: Intel HD Graphics avec WiFi, Bluetooth, 1x USB 2.0 Type-A, 2x USB 3.2 Gen 1 Type-A, 1x HDMI 1.4,1x RJ-45, 1 prise jack pour casque 3.5 mm - Couleur: Noir - Garantie: 1 an",
      types: ["Gaming"],
      availability: "Mytek : En Stock",
    }, //Ajoutez d'autres informations sur les cartes PC au besoin
  ];

  return (
    <div>
      <div className="container-card">
        <div className="box"> 
          <div className="container container1">
            <div className="row">
              {/* Première colonne */}
              <div className="col-4 col-lg-2 aaa" >
                {pcCardsData.slice(0, 5).map((card, index) => (
                  <div className="card" key={index}>
                    <img src={logo1} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{card.title}</h5>
                      <p className="card-text">{card.description}</p>
                      <div className="card-type">
                        {card.types.map((type, index) => (
                          <p key={index}>{type}</p>
                        ))}
                      </div>
                      
                      <h>{card.availability}</h>
                      <div>
                        <button className="card-btn">Check it out</button>
                        <GrFavorite  className="bbb" />

                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Deuxième colonne */}
              <div className="col-4 col-lg-2 aaa">
                {pcCardsData.slice(5, 10).map((card, index) => (
                  <div className="card" key={index}>
                    <img src={logo1} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{card.title}</h5>
                      <p className="card-text">{card.description}</p>
                      <div className="card-type">
                        {card.types.map((type, index) => (
                          <p key={index}>{type}</p>
                        ))}
                      </div>
                      <h>{card.availability}</h>
                      <div >
                        <button className="card-btn">Check it out</button>
                        <GrFavorite  className="bbb"/>

                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Troisième colonne */}
              <div className="col-4 col-lg-2 aaa">
                {pcCardsData.slice(10, 15).map((card, index) => (
                  <div className="card" key={index}>
                    <img src={logo1} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{card.title}</h5>
                      <p className="card-text">{card.description}</p>
                      <div className="card-type">
                        {card.types.map((type, index) => (
                          <p key={index}>{type}</p>
                        ))}
                      </div>
                      <h>{card.availability}</h>
                      <div>
                        <button className="card-btn">Check it out</button>
                        <GrFavorite  className="bbb" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PcCard;
