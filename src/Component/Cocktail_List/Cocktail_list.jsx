import React, {Component} from "react"
import CocktailListElement from "../Cocktail_List_Element/CocktailListElement";
import Button from "@material-ui/core/Button";
import "./CocktailList.css"

class Cocktail_list extends Component {
    state = {};

    cocktails = {
        "Martini" : [["Gin", "Trockener Wermut", "Olive"], "6 cl Gin und 1 cl Wermut in ein Rührglas geben und auf viel Eis in ca. 20 Sekunden kaltrühren. In eine klassische Martinischale abseihen und eine Olive auf einem Cocktailpicker in den Cocktail geben. Cheers!", "martini.jpeg"],
        "Cosmopolitan" : [["Zitrusvodka", "Cointreau", "Limettensaft", "Cranberrynektar"], "4,5 cl Zitrusvodka, 1,5 cl Cointreau, 1 cl Limettensaft und 3 cl Cranberrynektar in den Shaker geben, mit Eiswürfeln auffüllen und 15 Sekunden (also etwa 15-mal) kräftig schütteln. Den Cocktail in eine Cocktailschale – eine Coupette – doppelt, also durch zwei Siebe, abseihen. Nach belieben mit einer Zitruszeste am Glasrand garnieren. Cheers!", "cosmopolitan.jpeg"],
        "Caipirinha" : [["Cachaca", "Limette", "Rohrzucker"], "Limette in Stücke schneiden und in einen Tumbler geben. 3 BL Zucker darauf geben und mit einem Stößel oder Muddler zerstoßen. 5 cl Cachaca hinzufügen und den Tumbler zu ca. 2/3 mit Crushed Ice füllen. Kräftig umrühren und anschließend mit Crushed Ice toppen. Dieser Cocktail wird mit zwei kurzen Trinkhalmen serviert. Cheers!", "caipirinha.jpeg"],
        "Whisky Sour" : [["Whiskey", "Zitronensaft", "Zuckersirup"], "Dieser Cocktail wird im Shaker zubereitet. 6 cl Whisky, 3 cl Zitronensaft und 2 cl Zuckersirup in den Shaker geben und diesen mit viel Eis auffüllen. Kräftig shaken. Den Cocktail in einen mit Eis gefüllten Tumbler abseihen und abschließend mit einem Trinkhalm und ggf. mit einer Zitronenzeste garnieren. Cheers!", "whiskey_sour.jpeg"],
        "Tequila Sunrise" : [["Tequila", "Orangensaft", "Grenadine"], "Ein paar Eiswürfel in ein Longdrinkglas geben. 2 cl Grenadine darauf geben und weiteres Eis in das Glas füllen. Möglichst 10 cl frischen Orangensaft vorsichtig darauf gießen. Falls die Trennung zwischen der Grenadine und dem Orangensaft zu streng ist, vorsichtig mit einem Löffel ein wenig umrühren. 4 cl Tequila zum Schluss auf dem Orangesaft floaten, also oben aufgießen. Definitiv mit einem Stirrer und nach Wunsch mit einem Trinkhalm versehen. Vor dem Genuss muss leider die Optik zerstört werden, damit man nicht nacheinander Sirup, Saft und puren Agavenbrand (oder umgekehrt, falls man ohne Trinkhalm serviert) trinkt. Cheers!", "tequila_sunrise.jpeg"]
    };

    checkCocktails = () => {
        let temp = this.state;
        for (let cocktail in this.cocktails) {
            if (this.cocktails.hasOwnProperty(cocktail)) {
                temp = this.state;
                temp[cocktail] = [];
                this.setState(temp);
                this.cocktails[cocktail][0].forEach((item, index) => {
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

    trigger= true;


    showWarning = () => {
        console.log(this.trigger);
        if (this.trigger){
            return "Nothing to show! Please choose to shop or select more ingredients"
        }
    };


    render() {

        return (
            <div className="Frame">
                <h1>Cocktail List</h1>
                <div >
                {
                    Object.keys(this.cocktails).map(function (key, index) {
                        if (this.state[key]){

                            if (this.props.location.state.shopping){

                                if (this.cocktails[key][0].every(val => this.state[key].includes(val))){
                                    this.trigger = false;
                                    return <CocktailListElement name={key} cocktails={this.cocktails} state={this.state} key={key}/>
                                }
                            } else {
                                this.trigger = false;
                                return <CocktailListElement name={key} cocktails={this.cocktails} state={this.state} key={key}/>
                            }

                        }


                    }, this)
                }
                </div>
                <p>{this.showWarning()}</p>
                <div className="BackButtonContainer">
                    <Button variant="contained" color="primary" onClick={() => this.props.history.goBack()}>
                        Back
                    </Button>
                </div>

            </div>
        )
    }
}

export default Cocktail_list;