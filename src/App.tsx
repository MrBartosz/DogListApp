import { Route, Routes } from 'react-router-dom';
import DogList from './components/DogList';
import DogPhoto from './components/DogPhoto';
import Navbar from './components/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route path='/*' element={<DogList />} />
        <Route path='/DogList' element={<DogList/>} />
        <Route path='/DogPhoto' element={<DogPhoto/>} />
      </Routes>
    </div>
  );
}

export default App;
