import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import Find_cocktail from "./Component/Find_Cocktail/Find_cocktail"
import Cocktail_list from "./Component/Cocktail_List/Cocktail_list"
import Recipe from "./Component/Recipe/Recipe"

function App() {
  return (
      <BrowserRouter>
          <Switch>
              <Route path="/Cocktail_list" component={Cocktail_list}/>
              <Route path="/Recipe" component={Recipe}/>
              <Route path="/" component={Find_cocktail}/>
              <Redirect from="/" to="/"/>
              <Route render={()=><h1>Not Found</h1>}/>
          </Switch>

      </BrowserRouter>
  );
}

export default App;
