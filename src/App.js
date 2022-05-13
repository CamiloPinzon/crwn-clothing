import { Routes, Route } from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch } from 'react-redux';

import { onAuthStateChangedListener, createUserDocumentFromAuth } from './utils/firebase/firebase.utils';
import { setCurrentUser } from './store/user/user.action';
import Navigation from './routes/navigaton/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Home from "./routes/home/home.component";
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';

const  App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChangedListener((user) => {
        if(user){
           createUserDocumentFromAuth(user);
        }
        dispatch(setCurrentUser(user));
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
  <Routes>
    <Route path='/' element={<Navigation />}>
      <Route index element={<Home/>} />
      <Route path='shop/*' element={<Shop/>}></Route>
      <Route path='auth' element={<Authentication/>}></Route>
      <Route path='checkout' element={<Checkout/>}></Route>
    </Route>
  </Routes>)
}

export default App;
