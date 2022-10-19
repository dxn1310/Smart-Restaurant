import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import React, { useState } from 'react';
import Cart from './components/Cart/Cart.js';
// import Menu from './components/Menu/Menu.js'
import Details from './components/Details/Details.js';
import Order_confirm from './components/Order_Confirm/Order_confirm.js';
import { Route, Routes } from "react-router-dom";
import Basit from './components/Basit/Basit.js'

import Landinpage from './components/Landing/landing_page/Landing.js';
import Menu from './components/Menu/menu_page/Menu.js';


function App() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [order, setOrder] = useState(() => [])


  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Landinpage />} />
        <Route path="/Menu" element={<Menu order={order} setOrder={setOrder} />} />
        <Route path="/Cart" element={<Cart orderState={order} setOrderState={setOrder} name={name} />} />
        <Route path="/Details" element={<Details name={name} setName={setName} phone={phone} setPhone={setPhone} />} />
        <Route path="/Order-Confirm" element={<Order_confirm name={name} phone={phone} />} />
      </Routes>
    </ChakraProvider>

  );
}

export default App;
