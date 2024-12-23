import React from 'react';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Agent from './pages/Agent'; 
import Navbar from './components/Navbar';

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" element={<Home />} />
        <Route path="/AgentPage/:id" element={<Agent />} />
      </Switch>
    </Router>
  );
}

export default Routes;
