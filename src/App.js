import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
//import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import { useState } from 'react';
import Work from './components/work/Work';

function App() {
  const [colorMode, setColorMode] = useState('light');

  function toggleColorMode() {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
  
    if (colorMode === 'light') {
      document.body.className = 'dark-mode';
    } else {
      document.body.className = '';
    }
  }
  return (
        <>
          <Header onToggleColorMode={toggleColorMode}/>
          <main className={`main ${colorMode === 'light' ? 'light-mode' : 'dark-mode'}`}>
            <Home/>
            <About/>
            <Skills/>
            {/*<Services/>*/}
            <Qualification />
            <Work/>
            <Contact />
            <Footer />
          </main>
        </>
  );
}

export default App;
