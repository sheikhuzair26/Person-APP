import React from "react";
import "./PersonInfo.css";
import { Button, Card, ButtonGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

import PropType from "prop-types";

const PersonInfo = props => {
  return (
    <Card.Body className="PersonInfo">
      <Card.Title>
        {props.personPassAttribute.name}, {props.personPassAttribute.age}
      </Card.Title>
      <Card.Text>{props.personPassAttribute.description}</Card.Text>
      <ButtonGroup className="button-group" aria-label="Basic example">
        <Button variant="light" onClick={props.jabEditButtonClickHoToKyaKaro}>
          <FontAwesomeIcon className="text-info" icon={faEdit} />
        </Button>
        <Button variant="light" onClick={props.removePerson}>
          <FontAwesomeIcon className="text-danger" icon={faTrash} />
        </Button>
      </ButtonGroup>
    </Card.Body>
  );
};

PersonInfo.propTypes = {
  personPassAttribute: PropType.object,
  jabEditButtonClickHoToKyaKaro : PropType.func ,
  removePerson : PropType.func
};

export default PersonInfo;
