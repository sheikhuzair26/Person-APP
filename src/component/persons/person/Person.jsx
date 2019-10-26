import React from 'react';
import "../person/Person.css";
import PersonInfo from "./PersonInfo"
import PersonEdit from "./PersonEdit"
import PropType from "prop-types"
const Person = (props) => {
    return (
        <div className="Person">
            Person Comp
        { props.isEditMode ? <PersonEdit/> : <PersonInfo/>}

        </div>
    );
};

Person.propTypes = {
    isEditMode: PropType.bool,
}

export default Person;