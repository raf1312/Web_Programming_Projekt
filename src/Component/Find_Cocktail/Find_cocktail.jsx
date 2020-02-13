import React, {Component} from "react"
import Ingredient_check from "../Ingredient_Check/Ingredient_check"
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom';
import "./FindCocktail.css"


class Find_cocktail extends Component {
    state = {
        Ingredients: {
            "Gin" : false,
            "Trockener Wermut" : false,
            "Olive" : false,
            "Zitrusvodka" : false,
            "Cointreau" : false,
            "Limettensaft" : false,
            "Cranberrynektar" : false,
            "Cachaca" : false,
            "Limette" : false,
            "Rohrzucker" : false,
            "Whiskey" : false,
            "Zitronensaft" : false,
            "Zuckersirup" : false,
            "Tequila" : false,
            "Orangensaft" : false,
            "Grenadine" : false,
        },
        shopping: {
            "shopping" : false
        }
    };


    // Switch ingredients checked value
    changeChecked = (key, value) => {
        let temp = this.state;
        temp.Ingredients[key] = !temp.Ingredients[key];
        this.setState( temp)
    };

    handleChange = () => {
        let temp = this.state;
        temp.shopping["shopping"] = !temp.shopping["shopping"];
        this.setState( temp)
    };

    render() {
        return (
            <div className="FindCocktail">
                <h1>Find Cocktail</h1>
                <div className="List">
                    <h3>Select Ingredients</h3>
                {
                    Object.keys(this.state.Ingredients).map(function (key, index) {
                        return <Ingredient_check ingredient={key} onChange={this.changeChecked} checked={index} key={key}/>
                    }, this)
                }
                </div>

                <div className="Shopping">
                    <h3>Select if you would go shopping</h3>
                <FormControlLabel
                    control={
                        <Checkbox color="primary" value="shopping" checked={this.state.shopping.shopping} onChange={this.handleChange}/>
                    }
                    label="Show only recipes whose ingredients are in stock."
                />

                    <div className="ButtonContainer">

                        <Button variant="contained" color="primary">
                            <Link to={{
                                pathname: '/Cocktail_list',
                                state: {
                                    Ingredients: this.state.Ingredients,
                                    shopping: this.state.shopping.shopping
                                }
                            }}
                            >Show Cocktails</Link>
                        </Button>
                    </div>
                </div>


            </div>
        )
    }
}

export default Find_cocktail;