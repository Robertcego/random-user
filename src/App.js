import React, { useContext, useState } from 'react';
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext.jsx';

import TopBar from './components/TopBar.jsx';
import Container from './components/Container.jsx';
import PersonInformation from './components/PersonInformation.jsx';

import './App.css';
import PersonOptions from './components/PersonOptions.jsx';

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
    </ThemeProvider>
    );
}


const MainContent = () => {
  const { theme } = useContext(ThemeContext);
  const currentStyles = styledTheme[theme];
  
  const [userSelection, setUserSelection] = useState('');

  const handleUserSelection = (e) => {
    e.preventDefault();  
    console.log('Button clicked');
    setUserSelection('female');
  }

  console.log('====================================');
  console.log('theme', theme);
  console.log('====================================');

  return (
    <div style={currentStyles}>
      <TopBar />
      <Container>
        <PersonOptions handleClick={handleUserSelection} />
        <PersonInformation genderSelection={userSelection}/>
      </Container>
    </div>
  );
}

export default App;
