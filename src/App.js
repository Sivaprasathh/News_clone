import React from "react";
import { Route, Switch } from "react-router-dom";
import Top from "../src/Components/Top";
import Latest from "./Components/Latest";
import Best from "../src/Components/Best";
import { NavLink,Link } from "react-router-dom"
import {Navbar,Container,Nav} from "react-bootstrap";
import "./App.css"
class App extends React.Component {
    render() {
      return (
        <div>
          
          <div className="nav-link">
        <NavLink to="/top" className = "links">
          Top Stories
        </NavLink>
        <NavLink to="/latest" className = "links">
          Latest Stories
        </NavLink>
        <NavLink to="/best" className = "links">
          Best Stories
        </NavLink>
      </div>
      
          <Switch>
            
            <Route exact path="/top" component={Top}  />
            <Route exact path="/latest" component={Latest} />
            <Route exact path="/best" component={Best} />
      
      
          </Switch>
        </div>
      );
    }
  }
  export default App;