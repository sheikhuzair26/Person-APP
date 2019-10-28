import React from "react";
import "./PersonEdit.css";
import PropType from "prop-types";
import { Button, Card, ButtonGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

const PersonEdit = props => {
  return (
    <Card.Body className="PersonInfo">
      <Card.Title>Edit Person</Card.Title>
      <Card.Text>
        <input value={props.personPassAttribute.name} />
        <input type="number" value={props.personPassAttribute.age} />
        <textarea>{props.personPassAttribute.description}</textarea>
      </Card.Text>
      <ButtonGroup className="button-group" aria-label="Basic example">
        <Button variant="light">
          <FontAwesomeIcon className="text-info" icon={faCheck} />
        </Button>
        <Button variant="light">
          <FontAwesomeIcon className="text-danger" icon={faTimes} />
        </Button>
      </ButtonGroup>
    </Card.Body>
  );
};

PersonEdit.propTypes = {
   personPassAttribute : PropType.object
};

export default PersonEdit;
