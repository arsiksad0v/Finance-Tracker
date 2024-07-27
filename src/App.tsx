import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Categories from './components/Categories';
import TransactionModal from './components/TransactionModal';

const App: React.FC = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/add" element={<TransactionModal />} />
      </Routes>
    </Router>
  );
};

export default App;
