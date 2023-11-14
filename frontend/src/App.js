import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import NotesList from './components/NotesList';
import CreateNote from './components/CreateNote';
import CreateUser from './components/CreateUser';
import SignUp from './components/SignUp';
import Login from './components/Login';


function App() {
  return (
    
    <Router>
    

    
    
    <div className="container p-4">
    
      <Route path="/register" exact component={SignUp} />
      <Route path={"/edit/:id"} component={CreateNote} />
      <Route path="/create" component={CreateNote} />
      <Route path="/user" component={CreateUser} />
      <Route path="/login" component={Login} />
      
      </div>
    </Router>
  );
}
export default App;
