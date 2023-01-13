import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Journeys from './pages/Journeys';
import Stations from './pages/Stations';
import Stats from './pages/Stats';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/stations' element={<Stations />} />
        <Route path='/journeys' element={<Journeys />} />
        <Route path='/stats' element={<Stats />} />
      </Routes>
    </Router>
  );
}
