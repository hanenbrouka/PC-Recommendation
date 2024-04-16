import React from "react";
import "../Filtrage/Filtre.css";
import Form from "react-bootstrap/Form";

function Filtre() {
  return (
    <Form className="container-check">
    <div>
    <p className="title1">Categorie</p>
      <div className="mb-3">
        <Form.Check // prettier-ignore
          type="checkbox"
        />
      </div>
      <div className="mb-3">
        <Form.Check // prettier-ignore
          type="checkbox"
        />
      </div>
      <div className="mb-3">
        <Form.Check // prettier-ignore
          type="checkbox"
        />
      </div>
      <div className="mb-3">
        <Form.Check // prettier-ignore
          type="checkbox"
        />
      </div>
      <div className="mb-3">
        <Form.Check // prettier-ignore
          type="checkbox"
        />
      </div>
      <div className="mb-3">
        <Form.Check // prettier-ignore
          type="checkbox"
        />
      </div>
      </div>
      <div>
    <p className="title1">Salary range</p>
      <div className="mb-3">
        <Form.Check // prettier-ignore
          type="checkbox"
        /> 
       
      </div>
      <div className="mb-3">
        <Form.Check // prettier-ignore
          type="checkbox"
        />
      </div>
      <div className="mb-3">
        <Form.Check // prettier-ignore
          type="checkbox"
        />
      </div>
      <div className="mb-3">
        <Form.Check // prettier-ignore
          type="checkbox"
        />
      </div>
      <div className="mb-3">
        <Form.Check // prettier-ignore
          type="checkbox"
        />
      </div>
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
