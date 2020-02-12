import React from "react";
import {Link} from "react-router-dom";

const CocktailListElement = (props) => {

    const calculatePercentage = (props) => {
        if (props.state[props.name]){
            let percentage = (props.state[props.name].length / props.cocktails[props.name][0].length)*100;
            return percentage.toFixed(2)
        }
    };

    return (
        <div>
                <Link to={{
                    pathname: '/Recipe',
                    state: {
                        name: props.name,
                        cocktails: props.cocktails,
                        state: props.state
                    }
                }}
                ><p>{props.name} {calculatePercentage(props)}% of Ingredients in Stock</p></Link>
        </div>
    );
};

export default CocktailListElement;