import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Cart from './components/Cart/Cart';
import Menu from './components/Menu/Menu.js'
import Details from './components/Details/Details.js';
import { Route, Routes } from "react-router-dom";
import Basit from './components/Basit/Basit.js'


function App() {
  return (
    <ChakraProvider>
      {/* <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Details" element={<Details />} />
      </Routes> */}
      {/* <div className="App">
        <Cart />
      </div> */}
      <Basit />
    </ChakraProvider>

  );
}

export default App;
