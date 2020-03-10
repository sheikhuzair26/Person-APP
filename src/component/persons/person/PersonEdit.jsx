import "./PersonEdit.css";
import PropType from "prop-types";
import { Button, Card, ButtonGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";



import React, { Component } from 'react';

class PersonEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myPerson: props.personPassAttribute
    }

  }

  render() {
    return (
      
      <Card.Body className="PersonInfo">
      <Card.Title>Edit Person {this.state.myPerson.name}</Card.Title>
      <Card.Text>
        <input type="text" defaultValue={this.state.myPerson.name} 
        onChange ={ (abc) =>{
          console.log(abc.target.value)
            {/* props.jabEditKaroToh
            (this.state.myPerson.name,
             abc.target.defaultValue); */}
                this.setState({
                  myPerson : {
                    name : abc.target.value,
                    age : this.state.age,
                    description: this.state.description
                  }
                })
       }}/>




        <input type="number" value={this.state.myPerson.age} />
        <textarea value = {this.state.myPerson.description} />
      </Card.Text>
      <ButtonGroup className="button-group" aria-label="Basic example">
        <Button variant="light" onClick = { 
                      () => this.props.saveEdit
                      (this.state.myPerson)}>
          <FontAwesomeIcon className="text-info" icon={faCheck} />
        </Button>
        <Button variant="light" onClick={this.props.cancelClickAction}>
          <FontAwesomeIcon className="text-danger" icon={faTimes} />
        </Button>
      </ButtonGroup>
    </Card.Body>

      
    );
  }
}


PersonEdit.propTypes = {
  personPassAttribute : PropType.object,
  cancelClickAction  : PropType.func,
  saveEdit : PropType.func
};

export default PersonEdit;













