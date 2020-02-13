import React, {Component} from "react"
import Ingredient_check from "../Ingredient_Check/Ingredient_check";
import Button from "@material-ui/core/Button";

class Recipe extends Component {



    render() {

        const props = this.props.location.state;
        const gesamt =  props.cocktails[props.name][0];
        const vorhanden  = props.state[props.name];
        const einkaufen = props.cocktails[props.name][0].filter(x => !props.state[props.name].includes(x));

        return (
            <div>
                <h1>Recipe</h1>
                <h1>Cocktail: {props.name}</h1>
                <h2>Zutaten gesamt: {gesamt.length}</h2>
                {
                    Object.keys(gesamt).map(function (key, index) {
                        return <h3>{gesamt[key]}</h3>
                    }, this)
                }
                <h2>Zutaten vorhanden: {vorhanden.length}</h2>
                {
                    Object.keys(vorhanden).map(function (key, index) {
                        return <h3>{vorhanden[key]}</h3>
                    }, this)
                }
                <h2>Zutaten einzukaufen: {einkaufen.length}</h2>
                {
                    Object.keys(einkaufen).map(function (key, index) {
                        return <h3>{einkaufen[index]}</h3>
                    }, this)
                }
                <h2>Zubereitung:</h2>
                <p>{props.cocktails[props.name][1]}</p>
                <Button variant="contained" color="primary" onClick={() => this.props.history.goBack()}>
                    Back
                </Button>
            </div>
        )
    }
}

export default Recipe;