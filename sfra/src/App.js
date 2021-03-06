import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import NewUserDashboard from "./components/Dashboard/NewUserDashboard";
import ReturnUserDashboard from "./components/Dashboard/ReturnUserDashboard";
import StartScreen from "./components/RecipeForm/StartScreen";
import TheStoryBasics from "./components/RecipeForm/TheStoryBasics";
import TheStoryTradition from "./components/RecipeForm/TheStoryTradition";
import StartScreen2 from "./components/RecipeForm/StartScreen2";
import Expectations from "./components/RecipeForm/Expectations";
import StartScreen3 from "./components/RecipeForm/StartScreen3";
import Ingredients from "./components/RecipeForm/Ingredients";
import Directions from "./components/RecipeForm/Directions";
import SuccessPage from "./components/RecipeForm/SuccessPage";
import RecipePageStyle from "./components/Styles/RecipePageStyle";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/return-user-dash">
        <ReturnUserDashboard />
      </Route>

      <Route exact path="/user-recipe/:id">
        <RecipePageStyle />
      </Route>

      <Route exact path="/SignUp">
        <SignUp />
      </Route>

      <Route exact path="/new-user-dash">
        <NewUserDashboard />
      </Route>

      <Route exact path="/start-screen">
        <StartScreen />
      </Route>

      <Route exact path="/the-story-basics">
        <TheStoryBasics />
      </Route>

      <Route exact path="/the-story-tradition">
        <TheStoryTradition />
      </Route>

      <Route exact path="/start-screen-2">
        <StartScreen2 />
      </Route>

      <Route exact path="/the-expectations">
        <Expectations />
      </Route>

      <Route exact path="/start-screen-3">
        <StartScreen3 />
      </Route>

      <Route exact path="/the-ingredients">
        <Ingredients />
      </Route>

      <Route exact path="/the-directions">
        <Directions />
      </Route>

      <Route exact path="/recipe-created-success">
        <SuccessPage />
      </Route>
    </div>
  );
}

export default App;
