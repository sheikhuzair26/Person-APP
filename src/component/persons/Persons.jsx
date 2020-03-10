import "./Persons.css";
import Person from "./person/Person";
import "bootstrap/dist/css/bootstrap.min.css";
import Background from "../images/back.jpg";
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

  toggleEditMood = (callBackClickedPerson, newValue) => {
    this.setState({
      personsData: this.state.personsData.map(changePersonCallBack => {
        if (changePersonCallBack.name === callBackClickedPerson.name) {
          changePersonCallBack.isEditMode = newValue;
        } else {
        }
        return changePersonCallBack;
      })
    });
  };


  editPerson = (person, newPerson) => {
    this.setState({
      personsData: this.state.personsData.map(changePersonCallBack => {
        if (changePersonCallBack.name === person.name) {
          changePersonCallBack.name = newPerson.name;
          // return Object.assign(changePersonCallBack, newPerson)
        } else {}
        return changePersonCallBack;
      })
    });
  
   } 
  
  deletePersonFun = ClickedPerson => {
    this.setState({
      personsData: this.state.personsData.filter(
        personDlt => personDlt.name !== ClickedPerson.name
      )
    });
  };

  render() {
    return (
      <div className="Persons">
        <h1>Person App</h1>

        {this.state.personsData.map(personVar => ( <Person 
            personMainAtt={personVar}
            removeClickedPerson={() => this.deletePersonFun(personVar)}
            callmeWhenYouEditPerson= {
              (newPerson) =>{ 
                this.editPerson(personVar, newPerson)
              this.toggleEditMood(personVar, false)}}
            callMeWhenYouWantToEnableEdit={() =>this.toggleEditMood(personVar, true)}
            callMeWhenYouWantToDisableEdit={() =>this.toggleEditMood(personVar, false)
            }
          />
        ))}
      </div>
    );
  }
}

export default Persons;
