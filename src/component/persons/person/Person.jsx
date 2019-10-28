import React from "./node_modules/react";
import "./Person.css";
import PersonInfo from "./PersonInfo";
import PersonEdit from "./PersonEdit";
import PropType from "./node_modules/prop-types";
import { Button, Card } from "./node_modules/react-bootstrap";

const Person = props => {
  return (
    <>
      <Card className="Person">
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
