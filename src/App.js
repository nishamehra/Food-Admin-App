import React from "react";
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Pages/login";
import Dashboard from "./Pages/Dashboard";
import Authenticated from "./Components/Authentication";
import AdminFragment from "./Fragments/AdminFragment";
import { AccountBoxRounded, PersonRounded } from "@material-ui/icons";

function App() {
  return (
    <Switch>
      <Route exact path="/"/>
        {/*<Authenticated>*/}
          <Dashboard/>
         {/*</Authenticated>*/}
      <Route exact path='/login'>
         <Authenticated nonAuthenticated={true}>
           <Login/>
         </Authenticated>
        </Route>
      <Route path="*" render={()=>"404 not found"}/>
    </Switch>
  );
}

export default App;

