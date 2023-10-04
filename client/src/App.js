import { Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth';
import Home from './pages/Home';
import Product from './pages/Product';
import ProductsList from './pages/ProductsList';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/home' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/products' element={<ProductsList />} />
      </Routes>
    </div>
  );
}

export default App;
