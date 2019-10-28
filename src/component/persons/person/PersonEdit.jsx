import React from "./node_modules/react";
import "./PersonEdit.css";
import PropType from "./node_modules/prop-types";
import { Button, Card, ButtonGroup } from "./node_modules/react-bootstrap";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "./node_modules/@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "./node_modules/@fortawesome/free-solid-svg-icons";

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
  person: PropType.object
};

export default PersonEdit;
