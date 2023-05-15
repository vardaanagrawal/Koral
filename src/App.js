import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar.js';
import Home from './components/home/Home.js';
import About from './components/about/About.js';
import Blue1 from './components/bluebox1/Bluebox1.js';
import Projects from './components/projects/Projects.js';
import Clients from './components/clients/Clients.js';
import Contact from './components/contact/Contact.js';
import Bluebox2 from './components/bluebox2/Bluebox2.js';
import Footer1 from './components/footer1/Footer1.js';
import Footer2 from './components/footer2/Footer2.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Blue1/>
      <Projects/>
      <Clients/>
      <Contact/>
      <Bluebox2/>
      <Footer1/>
      <Footer2/>
    </div>
  );
}

export default App;
