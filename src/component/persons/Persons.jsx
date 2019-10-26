import React from 'react';
import "./Persons.css";
import Person from "./person/Person";

const Persons = () => {
    return (
        <div className="Persons">
            Persons Component
            <Person isEditMode ={true}/>
            <Person isEditMode = {false}/>

        </div>
    );
};

export default Persons;