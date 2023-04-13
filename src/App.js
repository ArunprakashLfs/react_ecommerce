
import { Routes, Route } from 'react-router-dom';
import Navbar from './routes/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Home from './routes/home/home';
import Shop from './routes/shop/shop';
import Cart from './routes/cart/cart';
import User from './routes/user/user';

import Data from './components/datas/data'
function App() {
  return (
    <Routes>
      <Route path='/'
      element={<><Navbar/> <Outlet/></>}> 
      <Route index
      element={<Home Data={Data}/>}></Route>
      <Route path='/shop' element={<Shop/>}></Route>
      <Route path='/user' element={<User/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
