import './App.css';
import { Routes, Route } from 'react-router-dom';
import Words from './pages/Words/Words';
import Welcome from './pages/Welcome/Welcome';
import EditingDeck from './pages/EditingDeck/EditingDeck';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Welcome />} />
      <Route path='/words' element={<Words />} />
      <Route path='/editing' element={<EditingDeck />} />
    </Routes>
  );
}

export default App;
