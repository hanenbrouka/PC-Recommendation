// import React from "react";
// import "../Filtrage/Filtre.css";
// import Form from "react-bootstrap/Form";
// import FilterItem from "./FilterItem";

// function Filtre() {
//   let category = [
//     { name: "Laptops", id: 4 },
//     { name: "Gaming", id: 1 },
//     { name: "Laptops PRO", id: 2 },
//     { name: "UltraBook", id: 3 },
//   ];
//   let salary = [
//     { priceRange: "500 TND - 1000 TND", id: 1 },
//     { priceRange: "1500 TND - 2000 TND", id: 2 },
//     { priceRange: "2500 TND - 3000 TND", id: 3 },
//     { priceRange: "3500 TND - 4000 TND", id: 4 },
//     { priceRange: "4500 TND - 5000 TND", id: 5 },
//     { priceRange: "+5000 TND", id: 6 },
//   ];

//   return (
//     <Form className="container-check">
//       <div>
//         <p className="title1">Categorie</p>
//         {category.map((item) => (
//           <div className="mb-3" key={item.id}>
//             <FilterItem label={item.name} />
//           </div>
//         ))}
//       </div>
//       <div>
//         <p className="title1">Salary Range</p>

//         {salary.map((item) => (
//           <div className="mb-3" key={item.id}>
//             <FilterItem label={item.priceRange} />
//           </div>
//         ))}
//       </div>
      
//     </Form>
//   );
// }

// export default Filtre;
