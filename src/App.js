
import { Routes, Route } from 'react-router-dom';
import Navbar from './routes/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
// import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home';
import Shop from './routes/shop/shop';
import Cart from './routes/cart/cart';
import User from './routes/user/user';
// import FilterContainer from './components/FilterContainer/FilterContainer';

import Data from './components/datas/data'
import Login from './components/login/login';
import Check from './components/check';
function App() {
  return (
    <Routes>
      <Route path='/'
      element={<><Navbar/> <Outlet/></>}> 
      <Route index
      element={<Home />}></Route>
      <Route path='/shop' element={<Shop Data={Data}/>}></Route>
      <Route path='/user' element={<User/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/check' element={<Check Data={Data}/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
