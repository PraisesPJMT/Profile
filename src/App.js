import React from 'react';
import './App.css';
import Profile from './components/Profile';
import Links from './components/Links';
import Social from './components/Social';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <main>
        <Profile />
        <Links />
        <Social />
      </main>
      <Footer />
    </>
  );
}

export default App;
