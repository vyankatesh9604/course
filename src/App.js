import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle"
import { Switch, Route, Redirect} from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About'
import Services from './Component/Services'
import Contact from './Component/Contact'
import Navbar from './Component/Navbar'


const  App = () => {
  return (
    <>
    <Navbar></Navbar>
     <Switch>
       <Route  exact path ="/"  component={Home}/>
       <Route exact path ="/about"  component={About}/>
       <Route exact path ="/service"  component={Services}/>
       <Route exact path ="/contact"  component={Contact}/>
       <Redirect to ="/" />
     </Switch>
     </>
  );
}

export default App;
