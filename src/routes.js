import React from 'react';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Agent from './pages/Agent'; 
import Navbar from './components/Navbar';
import Error from './pages/Error';
import Footer from './components/Footer';

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" element={<Home />} />
        <Route path="/AgentPage/:id" element={<Agent />} />
        <Route path="*" element={<Error message="Você tem certeza que digitou a url certa?" />} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default Routes;
