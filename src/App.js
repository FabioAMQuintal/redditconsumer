import React from 'react';
import './App.css';
import Home from './features/Home/Home';
import Header from './features/Header/Header';
import Subreddits from './features/SubReddits/SubReddits';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Home />
      </main>
      <aside>
        
      </aside>
    </div>
  );
}

export default App;
