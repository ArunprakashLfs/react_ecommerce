import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './routes/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Home from './routes/home/home';

import Data from './components/datas/data'
function App() {
  return (
    <Routes>
      <Route path='/'
      element={<><Navbar/> <Outlet/></>}> 
      <Route index
      element={<Home Data={Data}/>}></Route>
      <Route path='/shop' element={<shop/>}></Route>
      <Route path='/user' element={<user/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
