import React, {Component} from "react"
import Button from "@material-ui/core/Button";
import "./Recipe.css"

class Recipe extends Component {



    render() {

        const props = this.props.location.state;
        const gesamt =  props.cocktails[props.name][0];
        const vorhanden  = props.state[props.name];
        const einkaufen = props.cocktails[props.name][0].filter(x => !props.state[props.name].includes(x));

        return (
            <div className="Frame">
                <h1>{props.name}</h1>
                <div className="RecipeCocktailImage">
                    <img className="RecipeImg" src={require(`../../Images/${props.cocktails[props.name][2]}`)}/>
                </div>
                <div className="RecipeInfoContainer">
                    <div className="NeededIngredients">
                        <h2>Ingredients you need</h2>
                        {
                            Object.keys(gesamt).map(function (key, index) {
                                return <p>{gesamt[key]}</p>
                            }, this)
                        }
                    </div>
                    <div className="MissingIngredients">
                        <h2>Ingredients to buy</h2>
                        {
                            Object.keys(einkaufen).map(function (key, index) {
                                return <p>{einkaufen[index]}</p>
                            }, this)
                        }
                    </div>
                    <div className="Preparation">
                        <h2>preparation steps</h2>
                        <p>{props.cocktails[props.name][1]}</p>
                    </div>
                </div>


                <div className="BackButtonContainer">
                <Button variant="contained" color="primary" onClick={() => this.props.history.goBack()}>
                    Back
                </Button>
                </div>
            </div>
        )
    }
}

export default Recipe;