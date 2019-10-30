import "./Persons.css";
import Person from "./person/Person";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { Component } from "react";

class Persons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personsData: [
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
      ]
    };
  }

  enableEdit = callBackClicked => {
    this.setState({
      personsData: this.state.personsData.map
      (changePersonCallBack => {
        if (changePersonCallBack.name === callBackClicked.name) {
          changePersonCallBack.isEditMode = true;
        } else {
        }
        return changePersonCallBack;
      })
    });
  };

  render() {
    return (
      <div className="Persons">
        <h1>Persons</h1>

        {this.state.personsData.map(personVar => (
          <Person
            personMainAtt={personVar}
            callMeWhenYouWantToEnableEdit={() => this.enableEdit(personVar)}
          />
        ))}
      </div>
    );
  }
}

export default Persons;
