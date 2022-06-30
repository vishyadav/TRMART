import React from 'react';
import './components/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Card from './components/Card'; 


function App() {
  return (
    <>
    <Header/>
    <Main/>
    <Card/>
    <Footer/>
    </>
  );
}

export default App;
