import React from "react";
import "../person/Person.css";
import PersonInfo from "./PersonInfo";
import PersonEdit from "./PersonEdit";
import PropType from "prop-types";
import { Button, Card } from "react-bootstrap";

const Person = props => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        {props.personMainAtt.isEditMode ? (
          <PersonEdit personPassAttribute={props.personMainAtt} />
        ) : (
          <PersonInfo personPassAttribute={props.personMainAtt} />
        )}
      </Card>

      {/* Person Comp
        { props.isEditMode ? <PersonEdit/> : <PersonInfo/>} */}
    </>
  );
};

Person.propTypes = {
  personMainAtt: PropType.object
};

export default Person;
