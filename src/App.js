import React, { useContext, useState } from 'react';
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext.jsx';

import TopBar from './components/TopBar.jsx';
import Container from './components/Container.jsx';
import PersonInformation from './components/PersonInformation.jsx';
import PersonOptions from './components/PersonOptions.jsx';

import './App.css';

const styledTheme = {
    light: {
      backgroundColor: '#fff',
      color: '#333',
    },
    dark: {
      backgroundColor: '#333',
      color: '#fff',
    },
  };

  // Using the theme styles
  
  function App() {
    return (
      <ThemeProvider>
      <MainContent />
    </ThemeProvider>);
}


const MainContent = () => {
  const [gender, setGender] = useState('');

const handleClick = (e) => {
  e.preventDefault();
  console.log('====================================');
  console.log('clicked');
  console.log('====================================');
};

  
  const { theme } = useContext(ThemeContext);
  const currentStyles = styledTheme[theme];

  console.log('====================================');
  console.log('theme', theme);
  console.log('====================================');

  return (
    <div style={currentStyles}>
      <TopBar />
      <Container>
        <PersonOptions handleButton={handleClick} />
        <PersonInformation gender={gender}/>
      </Container>
    </div>
  );
}

export default App;
