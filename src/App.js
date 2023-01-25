import './App.css';
import { Routes, Route } from 'react-router-dom';
import Words from './pages/Words/Words';
import Welcome from './pages/Welcome/Welcome';
import EditingDeck from './pages/EditingDeck/EditingDeck';
import { useEffect } from 'react';
import { fetchDeckData } from './store/deck-actions';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDeckData());
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Welcome />} />
      <Route path='/words' element={<Words />} />
      <Route path='/editing' element={<EditingDeck />} />
    </Routes>
  );
}

export default App;
