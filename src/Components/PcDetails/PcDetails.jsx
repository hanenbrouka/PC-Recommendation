import React from 'react';
import '../PcDetails/PcDetails.css';
import image from '../LandingPage/Image/gamer.jpeg'
import { GrFavorite } from "react-icons/gr";
import { FiShare2 } from 'react-icons/fi'
import { TbPointFilled } from 'react-icons/tb'
import { AiOutlineFileDone } from 'react-icons/ai'





function PcDetails() {

   const laptopInfo = [
    {
      Name: 'PC Portable Gamer DELL 5520 G15 i7 12è Gén 24Go RTX 3050',
      CPU: 'Intel® Core™ i7-12700H',
      Description:
        'Écran 15.6" FULL HD, 120HZ-Processeur:Intel Core i7-12700H(Up to 4,70 GHz Turbo max, 24Mode mémoire cache, 14-Cores) - Système d\'exploitation: Windows 10 Pro- Mémoire RAM: 24 Go DDR5-4800 MHz- Disque Dur: 512 Go SSD- Carte Graphique: NVIDIA GeForce RTX3050 (4Go de mémoire dédiée GDDR6) avec Wi-Fi, Bluetooth, 3x USB 3.2 Gen 1, 1x USB-C avec DisplayPort, 1x HDMI 2.1, 1x RJ45, 1 Casque/microphone - Clavier Rétroéclairé Avec Pavé Numérique - Couleur: Noir - Garantie: 1 an Retrait en Magasin ou Livraison Gratuite pour Cet Article',
      Display: '15.6 Pouces',
      GPU: 'GeForce RTX 3050',
      Image:
        'https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/b/u/bu-5520g15i7-24g-w10p.jpg',
      Link: 'https://www.mytek.tn/pc-portable-gamer-dell-5520-g15-i7-12e-gen-24g-rtx-3050.html',
      Price: '3149.0',
      Ram: '24 Go',
      Resolution: '1920 x 1080 pixels',
      Score: '0.5114283820591916',
      Stock: 'Hors Stock',
      Storage: '512Go SSD',
      Stores: 'MyTek',
      brand: 'DELL',
      category: 'Gaming',
    },
  ]
  const ficheTechniqueData = [
    { label: 'Marque', value: 'DELL' },
    { label: 'Processeur', value: 'Intel® Core™ i7-12700H' },
    { label: 'Mémoire', value: '24 Go' },
    {
      label: 'fréquence processeur',
      value:
        '3,3 GHz up to 4.5 GHz Turbo max, 16 Mo de mémoire cache, Hexa-Core',
    },
    { label: 'Résolution Ecran', value: '1920 x 1080 pixels' },
    { label: 'Type Processeur', value: 'Dual Core' },
    { label: 'Carte Graphique', value: 'GeForce RTX 3050'},
    { label: 'Garantie', value: '1ans' },
  ]

  return (
    <div className='flex-details-1 '>
    
      <div className="flex-details-1-price">
      
        <p className="PC-detail-price">3149.0</p>
        <p className="PC-detail-currency">TND</p>
      </div>
      <img src={image} className="images-detail-1" alt="#" />
      <div className="flex-details-1-name-icon">
        <p className="flex-details-1-name">PC Portable Gamer DELL 5520 G15 i7 12è Gén 24Go RTX 3050</p>
        <div className="flex-details-1-icon">
          <span className="PC-detail-icon1">
            <GrFavorite />
          </span>
          <p className="PC-detail-icon2">
            <FiShare2 />
          </p>
        </div>
      </div>
      <div className="flex-details-1-marque-category">
        <div className="flex-details-1-marque">
          <p className="flex-details-marque">Mytek </p>
          <p className="PC-detail-marque-point">
            <TbPointFilled />
          </p>
          <p className="PC-detail-stock">{laptopInfo.Stock}</p>
          <p className="PC-detail-stock-icon">
            <AiOutlineFileDone />
          </p>
        </div>

        <div className="flex-details-1-category">
          <p className="flex-details-category">PC category </p>
          <p className="PC-detail-category-point">
            <TbPointFilled />
          </p>
          <p className="PC-detail-category-icon">Gaming, Ultrabook</p>
        </div>
      </div>
      <div className="flex-details-1-pc-features">
        <div className="flex-pc-features1">
          <p>Ecran</p>
          <p className="bold-features"> 15.6 FULL HD</p>
        </div>
        <div className="flex-pc-features2">
          <p>Processeur</p>
          <p className="bold-features">Intel Core i7-12700H</p>
        </div>
        <div className="flex-pc-features3">
          <p>Mémoire RAM</p>
          <p className="bold-features">{laptopInfo.Ram}</p>
        </div>
        <div className="flex-pc-features4">
          <p>Disque dur</p>
          <p className="bold-features">{laptopInfo.Storage}</p>
        </div>
      </div>
      <div className="flex-details-1-overview">
        <p className="overview-title">Overview </p>
        <p className="overview-content">'Écran 15.6" FULL HD, 120HZ-Processeur:Intel Core i7-12700H(Up to 4,70 GHz Turbo max, 24Mode mémoire cache, 14-Cores) - Système d\'exploitation: Windows 10 Pro- Mémoire RAM: 24 Go DDR5-4800 MHz- Disque Dur: 512 Go SSD- Carte Graphique: NVIDIA GeForce RTX3050 (4Go de mémoire dédiée GDDR6) avec Wi-Fi, Bluetooth, 3x USB 3.2 Gen 1, 1x USB-C avec DisplayPort, 1x HDMI 2.1, 1x RJ45, 1 Casque/microphone - Clavier Rétroéclairé Avec Pavé Numérique - Couleur: Noir - Garantie: 1 an Retrait en Magasin ou Livraison Gratuite pour Cet Article',
      Display: '15.6 Pouces',
      GPU: 'GeForce RTX 3050'</p>
      </div>
      <div className="flex-details-1-fiche-Technique">
        <p className="fiche-Technique-Name">Fiche Technique</p>

        {ficheTechniqueData.map((item) => (
          <div key={item.label} className="pc-description-flex">
            <p className="pc-description-circle"></p>
            <p>
              {item.label}: {item.value}
            </p>
          </div>
        ))}
      </div>
      <div className="flex-details-1-Interested-btn">
        <p className="flex-details-1-Interested">
          Are you Interested in this Laptop?
        </p>
        <button className="flex-details-1-btn">Check it out </button>
      </div>
  
    </div>

  )
}

export default PcDetails;