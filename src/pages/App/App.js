import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import PlantIndex from '../../components/PlantIndex/PlantIndex';
import PlantDetail from '../../components/PlantDetail/PlantDetail';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  const [user, setUser] = useState(undefined)

  return (
    <main className='main-content'>
        <Header />
        <NavBar />
        <AuthPage setUser={setUser} />
        <div>
          <Routes>
            <Route path='/' element={<PlantIndex />} />
            <Route path='/:plantId' element={<PlantDetail />} />
          </Routes>
        </div>
    </main>
  );
}
