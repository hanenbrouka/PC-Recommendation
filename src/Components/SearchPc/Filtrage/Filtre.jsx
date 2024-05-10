import React from "react";
import "../Filtrage/Filtre.css";
import Form from "react-bootstrap/Form";
import FilterItem from "./FilterItem";

function Filtre() {
  let category = [
    { name: "PC Portable", id: 4 },
    { name: "Gamer", id: 1 },
    { name: "PC Portable PRO", id: 2 },
    { name: "Mac", id: 5 },
    { name: "UltraBook", id: 3 },
  ];
  let salary = [
    { priceRange: "0 TND - 100 TND", id: 1 },
    { priceRange: "101 TND - 200 TND", id: 2 },
    { priceRange: "201 TND - 500 TND", id: 3 },
    { priceRange: "501 TND - 750 TND", id: 4 },
    { priceRange: "751 TND - 1000 TND", id: 5 },
    { priceRange: "+1000 TND", id: 6 },
  ];

  return (
    <Form className="container-check">
      <div>
        <p className="title1">Categorie</p>
        {category.map((item) => (
          <div className="mb-3" key={item.id}>
            <FilterItem label={item.name} />
          </div>
        ))}
      </div>
      <div>
        <p className="title1">Salary Range</p>

        {salary.map((item) => (
          <div className="mb-3" key={item.id}>
            <FilterItem label={item.priceRange} />
          </div>
        ))}
      </div>
      <div>
        <p className="title1">Website</p>

        <div className="mb-3">
          <Form.Check // prettier-ignore
            type="checkbox"
          />
        </div>
      </div>
    </Form>
  );
}

export default Filtre;
