import React from "react";
import {Link} from "react-router-dom";

const CocktailListElement = (props) => {

    const calculatePercentage = (props) => {
        console.log(props);
        if (props.numInStock){
            let percentage = (props.numInStock.length / props.numIngredients)*100;
            return percentage.toFixed(2)
        }
    };

    const getInStock = (props) =>{
      if (props.stock){
          return props.stock[props.name];
      }
    };


    return (
        <div>
                <Link to={{
                    pathname: '/Recipe',
                    state: {
                        cocktail: props.name,
                        ingredients: props.cocktails[props.name],
                        inStock: getInStock(props)
                    }
                }}
                ><p>{props.name} {calculatePercentage(props)}% of Ingredients in Stock</p></Link>
        </div>
    );
};

export default CocktailListElement;