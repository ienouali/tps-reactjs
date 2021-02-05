import React from "react";
import { Route, Switch } from "react-router-dom";
import Calc from "./components/_CalcIMC/Calc";
import Sidebar from "./components/Sidebar";
import Repositories from "./components/_GithubAPI/Repositories/Repositories";
import TodosList from "./components/_Todolist/TodosList";
import NavBar from "./components/_Todolist/Navbar";

function App() {

  return (
    <div className="main">
      <NavBar/>
      <Sidebar />
      <div className="app bg-light">
        <Switch>
          <Route exact path="/" component={Calc} />
          <Route exact path="/tp-github-api" component={Repositories} />
          <Route exact path="/tp-todolist" component={TodosList} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
