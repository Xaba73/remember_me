import './App.css';
import { Routes, Route, Link, Switch } from 'react-router-dom';
import Words from './pages/Words';
import Welcome from './pages/Welcome';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Welcome />} />
      <Route path='/words' element={<Words />} />
    </Routes>
  );
}

export default App;
