import React, {Component} from "react"

class Recipe extends Component {
    render() {
        console.log(this.props.location);
        const props = this.props.location.state;
        return (
            <div>
                <h1>Recipe</h1>
                <h1>Cocktail: {props.name}</h1>
                <h2>Zutaten gesamt: {props.cocktails[props.name][0].length}</h2>
                <h2>Zutaten vorhanden: {props.state[props.name].length}</h2>
                <h2>Zubereitung:</h2>
                <p>{props.cocktails[props.name][1]}</p>
            </div>
        )
    }
}

export default Recipe;