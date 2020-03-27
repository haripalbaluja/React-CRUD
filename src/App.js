import React from 'react';
import Create from './components/create.js'
import { BrowserRouter as Router,Route, Link } from 'react-router-dom';
import './App.css';

class App extends React.Component {

  

  render(){

    console.log(1)

    return (

      <Router>
      <React.Fragment>

      
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul className="navbar-nav">
      <Link to={'/'}>
        <li className="nav-item active">  
         CRUD
        </li>
        </Link>
        <Link to={'/create'}>
        <li className="nav-item active">  
         CREATE
        </li>
        </Link>
        <Link to={'/read'}>
        <li className="nav-item active">  
        READ
        </li>
        </Link>
        <Link to={'/update'}>
        <li className="nav-item active">  
         UPDATE
        </li>
        </Link>
        <Link to={'/delete'}>
        <li className="nav-item active">  
         DELETE
        </li>
        </Link>
      </ul>
    </nav>
  

     <Create></Create>

      

      </React.Fragment>
      </Router>


    );
  }


}
export default App;
