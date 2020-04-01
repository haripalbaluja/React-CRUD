import React from 'react';
import Create from './components/create.js'
import { BrowserRouter as Router,Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/home.js'

class App extends React.Component {

  

  render(){

    console.log(1)

    return (

      <Router>
      <React.Fragment>

      
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

  <a className="navbar-brand" href="#">Logo</a>
  

  <ul className="navbar-nav">
    <li className="nav-item">
      <Link to="/">
      <a className="nav-link">CRUD</a>
      </Link>
    </li>
    <li className="nav-item">
      <Link to="create">
      <a className="nav-link">Create</a>
      </Link>
    </li>
    <li className="nav-item">
      <Link to="read">
      <a className="nav-link">Read</a>
      </Link>
    </li>
    <li className="nav-item">
      <Link to="update">
      <a className="nav-link">Update</a>
      </Link>
    </li>
    <li className="nav-item">
      <Link to="delete">
      <a className="nav-link">Delete</a>
      </Link>
    </li>
  </ul>
</nav>
  
    
      <Route path="/" component={Home}></Route>

      <Route path="/create" component={Create}></Route>
     

      

      </React.Fragment>
      </Router>


    );
  }


}
export default App;
