import React from "react";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from "@material-ui/core/FormControlLabel";
const Ingredient_check = (props) => {

    return (
        <div>
            <FormControlLabel
                control={
                    <Checkbox color="primary" value={props.ingredient}/>
                }
                label={props.ingredient}
            />
        </div>
    );
};

export default Ingredient_check;