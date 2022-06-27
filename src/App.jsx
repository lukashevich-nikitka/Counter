import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import FirstPage from './pages/first_task/Task_1';
import SecondPage from './pages/second_task/Task_2';
import ThirdPage from './pages/third_task/Task_3';
import FourthPage from './pages/fourth_task/Task_4';
import FivethPage from './pages/fiveth_task/Task_5';
import SixthPage from './pages/sixth_task/Task_6';
import './styles/Main.css';

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
            <li><Link to="/sixth">Task_6</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/first" element={<FirstPage />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/third" element={<ThirdPage />} />
        <Route path="/fourth" element={<FourthPage />} />
        <Route path="/fiveth" element={<FivethPage />} />
        <Route path="/sixth" element={<SixthPage />} />
        <Route path="*" element={<FirstPage />} />
      </Routes>
    </>
  );
}

export default App;
