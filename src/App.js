import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import Layout from './components/layout/Layout';
import UserGenerator from './components/user/UserGenerator';

import './styles/globals.css';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <UserGenerator />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
