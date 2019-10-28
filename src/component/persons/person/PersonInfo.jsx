import React from "./node_modules/react";
import "./PersonInfo.css";
import { Button, Card, ButtonGroup } from "./node_modules/react-bootstrap";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "./node_modules/@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "./node_modules/@fortawesome/free-solid-svg-icons";

import PropType from "./node_modules/prop-types";

const PersonInfo = props => {
  return (
    <Card.Body className="PersonInfo">
      <Card.Title>
        {props.personPassAttribute.name}, {props.personPassAttribute.age}
      </Card.Title>
      <Card.Text>{props.personPassAttribute.description}</Card.Text>
      <ButtonGroup className="button-group" aria-label="Basic example">
        <Button variant="light">
          <FontAwesomeIcon className="text-info" icon={faEdit} />
        </Button>
        <Button variant="light">
          <FontAwesomeIcon className="text-danger" icon={faTrash} />
        </Button>
      </ButtonGroup>
    </Card.Body>
  );
};

PersonInfo.propTypes = {
  personPassAttribute: PropType.object
};

export default PersonInfo;
