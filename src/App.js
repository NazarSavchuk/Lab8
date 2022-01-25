import './components/MainStyles.css'
import Header from'./components/Header'
import VisualContent from './components/VisualContent';
import React from 'react';
import Footer from './components/Footer';
import Events from './components/Events';
import JSONadd from './components/JSONadd'
import Form from './components/Form'

function App() {
  return (
    <div className="App">
      
      <Header/>
      <VisualContent />
      <JSONadd />
      <Events />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
