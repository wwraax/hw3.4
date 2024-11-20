import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Cart, Category, Detail, Home } from './pages';
import './app.css'
import { Header } from './components';
import { useState } from 'react';


function App() {
  
  const [cart, setCart] = useState();

  const addCart = (obj) => {
    const ind = cart.findIndex((elem) => {
      return elem.id === obj.id
    })

    if(ind < 0){
      setCart([{
        ...obj,
        cont: 1,
      }, ...cart])
    }else{
      cart[ind].cont += 1
      setCart([...cart])
    }
  }

  return (
    <Router>
      
      <Header />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/detail/:id' element={<Detail cart={cart} setCart={setCart} addCart={addCart}/>}/>
        <Route path='/category' element={<Category />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
      
    </Router>
  );
}

export default App;
