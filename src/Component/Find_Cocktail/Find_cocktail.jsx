// Imports
import React, {Component} from "react"
import Ingredient_check from "../Ingredient_Check/Ingredient_check"
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom';
import "./FindCocktail.css"

// Class based Component
class Find_cocktail extends Component {
    // State
    state = {
        Ingredients: {
            "Gin": false,
            "Trockener Wermut": false,
            "Olive": false,
            "Zitrusvodka": false,
            "Cointreau": false,
            "Limettensaft": false,
            "Cranberrynektar": false,
            "Cachaca": false,
            "Limette": false,
            "Rohrzucker": false,
            "Whiskey": false,
            "Zitronensaft": false,
            "Zuckersirup": false,
            "Tequila": false,
            "Orangensaft": false,
            "Grenadine": false,
        },
        shopping: {
            "shopping": false
        }
    };


    // Switch ingredients checked value
    changeChecked = (key, value) => {
        let temp = this.state;
        temp.Ingredients[key] = !temp.Ingredients[key];
        this.setState(temp)
    };

    // switch shopping cheched value
    handleChange = () => {
        let temp = this.state;
        temp.shopping["shopping"] = !temp.shopping["shopping"];
        this.setState(temp)
    };

    // render component
    render() {
        return (
            <div className="Frame">
                <h1>Find Cocktail</h1>
                <div className="List">
                    <h3>Select Ingredients</h3>
                    {/* Render Checkbox for every Ingredient */}
                    {
                        Object.keys(this.state.Ingredients).map(function (key, index) {
                            return <Ingredient_check ingredient={key} onChange={this.changeChecked} checked={index}
                                                     key={key}/>
                        }, this)
                    }
                </div>

                <div className="Shopping">
                    <h3>Select if you would go shopping</h3>
                    {/* Checkbox for shopping true/false */}
                    <FormControlLabel
                        control={
                            <Checkbox color="primary" value="shopping" checked={this.state.shopping.shopping}
                                      onChange={this.handleChange}/>
                        }
                        label="Show only recipes whose ingredients are in stock."
                    />

                    <div className="ButtonContainer">

                        {/* Button to go to Cocktail_List */}
                        <Link to={{
                            pathname: '/Cocktail_list',
                            state: {
                                Ingredients: this.state.Ingredients,
                                shopping: this.state.shopping.shopping
                            }
                        }}
                        ><Button className="Button" variant="contained" color="primary">Show Cocktails </Button></Link>

                    </div>
                </div>


            </div>
        )
    }
}

export default Find_cocktail;