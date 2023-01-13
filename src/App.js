import './App.css';
import { Routes, Route } from 'react-router-dom';
import Words from './pages/Words/Words';
import Welcome from './pages/Welcome/Welcome';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Welcome />} />
      <Route path='/words' element={<Words />} />
      <Route path='/new-deck' element={<div></div>} />
    </Routes>
  );
}

export default App;
