// imports
import React from "react";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from "@material-ui/core/FormControlLabel";

//Functional Component Ingredient_check
const Ingredient_check = (props) => {

    return (
        <div>
            {/* Checkbox to return */}
            <FormControlLabel
                control={
                    <Checkbox color="primary" checked={props.index} onChange={() => props.onChange(props.ingredient, props.index)}/>
                }
                label={props.ingredient}
            />
        </div>
    );
};

export default Ingredient_check;