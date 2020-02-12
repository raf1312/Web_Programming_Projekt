import React, {Component} from "react"
import CocktailListElement from "../Cocktail_List_Element/CocktailListElement";
import Ingredient_check from "../Ingredient_Check/Ingredient_check";

class Cocktail_list extends Component {
    state = {};

    cocktails = {
        "Long Island Icetea": ["Ingredient1", "Ingredient2", "Ingredient3", "Ingredient4"],
        "Pinacolada": ["Ingredient1", "Ingredient2", "Ingredient3"],
        "Jacky Cola": ["Ingredient1", "Ingredient3"]
    };

    checkCocktails = () => {
        let temp = this.state;
        for (let cocktail in this.cocktails) {
            if (this.cocktails.hasOwnProperty(cocktail)) {
                temp = this.state;
                temp[cocktail] = [];
                this.setState(temp);
                this.cocktails[cocktail].forEach((item, index) => {
                    temp = this.state;
                    if (this.props.location.state.Ingredients[item] === true) {
                        temp[cocktail].push(item);
                    }
                });
            }
        }
        this.setState(temp)
    };


    componentDidMount() {
        this.checkCocktails();
    };


    render() {

        return (
            <div>
                <h1>RubbeldieKatz2</h1>
                {
                    Object.keys(this.cocktails).map(function (key, index) {
                        return <CocktailListElement name={key} numIngredients={this.cocktails[key].length} numInStock={this.state[key]} cocktails={this.cocktails} stock={this.state} key={key}/>
                    }, this)
                }
            </div>
        )
    }
}

export default Cocktail_list;