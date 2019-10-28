import React from "react";
import "../person/Person.css";
import PersonInfo from "./PersonInfo";
import PersonEdit from "./PersonEdit";
import PropType from "prop-types";
import { Button, Card } from "react-bootstrap";

const Person = props => {
  
  return (
    <>
      <Card className="Person">
        {props.personMainAtt.isEditMode ? (
          <PersonEdit personPassAttribute={props.personMainAtt} />
        ) : (
          <PersonInfo personPassAttribute={props.personMainAtt} 
          jabEditButtonClickHoToKyaKaro ={props.callMeWhenYouWantToEnableEdit}
          />
        )}
      </Card>
    </>
  );
};

Person.propTypes = {
  personMainAtt: PropType.object,
  callMeWhenYouWantToEnableEdit : PropType.func
};

export default Person;
