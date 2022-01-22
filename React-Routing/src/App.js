

import React from 'react';

import "./style.css";
import {Button} from "react-bootstrap"
import Mounting from './components/Mounting'
import Unmounting from './components/Unmounting'
import Updating from './components/Updating'
import Home from './components/Home'
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App =() => {
  return (

  <div className="mainDiv">
  <main>
    <Router>

            <div className="div1">

             <h1 style={{textAlign:"center",color: 'white',
              textShadow: '1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue'}}> <b> Component Life Cycle </b> </h1> <br/> <br/> <br/>
             <nav >
              <div style={{width:"500px",margin:"auto"}}>
               <span>
                <Link to="/"> <Button  style={{backgroundColor:"y",width:"110px" ,margin:"5px"}} variant="primary">Home</Button> </Link>
              </span>  
               <span>
                <Link to="/mounting">  <Button style={{backgroundColor:"orange",width:"110px",margin:"5px"}} variant="primary">Mounting</Button> </Link>
              </span> 
               <span>
                <Link to="/updating">  <Button  style={{backgroundColor:"green",width:"110px",margin:"5px"}} variant="primary">Updating</Button> </Link> 
               </span> 
               <span>
               <Link to="/unmounting">  <Button  style={{backgroundColor:"red",width:"110px",margin:"5px"}} variant="primary">UnMounting</Button> </Link>
               </span>
              </div>  
             </nav>
         
            </div> <hr/>
       
        
         <div className="div2">    
              <Switch>
                 <Route path="/mounting" exact>
                      <Mounting/>
                 </Route>
               <Route path="/unmounting" exact>
                   <Unmounting/>
               </Route>
                <Route path="/updating" exact>
                   <Updating/>
                </Route>
                <Route path="/" exact>
                   <Home/>
                </Route>
            </Switch>
         </div>   

   </Router>   
 </main>
 </div>
  );
}

export default App;


