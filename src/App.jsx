import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import FirstPage from './Task_1';
import SecondPage from './Task_2';
import ThirdPage from './Task_3';
import FourthPage from './Task_4';
import FivethPage from './Task_5';
import './Main.css';

function App() {
  return (
    <>
      <header>
        <nav>
          <ul className="nav-list">
            <li><Link to="/first">Task_1</Link></li>
            <li><Link to="/second">Task_2</Link></li>
            <li><Link to="/third">Task_3</Link></li>
            <li><Link to="/fourth">Task_4</Link></li>
            <li><Link to="/fiveth">Task_5</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/first" element={<FirstPage />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/third" element={<ThirdPage />} />
        <Route path="/fourth" element={<FourthPage />} />
        <Route path="/fiveth" element={<FivethPage />} />
        <Route path="*" element={<FirstPage />} />
      </Routes>
    </>
  );
}

export default App;
