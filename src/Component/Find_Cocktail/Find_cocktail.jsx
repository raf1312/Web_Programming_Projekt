import React, {Component} from "react"
import Ingredient_check from "../Ingredient_Check/Ingredient_check"
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom';

class Find_cocktail extends Component {
    state = {
        Ingredients: {
            "Ingredient1" : false,
            "Ingredient2" : false,
            "Ingredient3" : false
        }


    };

    changeChecked = (key, value) => {
        let temp = this.state;
        temp.Ingredients[key] = !temp.Ingredients[key];
        this.setState({ temp}
        )
    };

    test = () => {
        console.log("TEST")
    };

    render() {
        return (
            <div>
                <h1>RubbeldieKatz</h1>
                {
                    Object.keys(this.state.Ingredients).map(function (key, index) {
                        return <Ingredient_check ingredient={key} onChange={this.changeChecked} checked={index} key={key}/>
                    }, this)
                }
                <FormControlLabel
                    control={
                        <Checkbox color="primary" value="shopping"/>
                    }
                    label="Show only recipes whose ingredients are in stock."
                />
                <Button variant="contained" color="primary">
                    <Link to={{
                        pathname: '/Cocktail_list',
                        state: {
                            Checked: this.state.Checked
                        }
                    }}
                    >Show Cocktails</Link>
                </Button>
            </div>
        )
    }
}

export default Find_cocktail;