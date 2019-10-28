import React from "react";
import "./Persons.css";
import Person from "./person/Person";
import "bootstrap/dist/css/bootstrap.min.css";

const Persons = () => {
  const personsData = [
    {
      name: "Amir",
      age: 10,
      description: "Mechanic in Honda",
      isEditMode: false
    },
    {
      name: "Zarrar",
      age: 19,
      description: "Cardio Doctor",
      isEditMode: false
    },

    {
      name: "HamzA",
      age: 18,
      description: "Manager at his home",
      isEditMode: false
    }
  ];
  return (
    <div className="Persons">
      <h1>Persons</h1>

      {personsData.map(personVar => (
        <Person personMainAtt={personVar} />
      ))}
    </div>
  );
};

export default Persons;
