
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AddProduct from './components/AddProduct';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Sidebar from './components/Sidebar';
import ProductProfile from './components/ProductProfile/ProductProfile';

function App() {
  return (
    <BrowserRouter>
    <div>
     <div className='flex flex-row'>
     <Sidebar/>
     <Header/>
     </div>
     
     <div>
     
     <Routes>
     <Route path="/" element={<Homepage/>}/>

      <Route path="/add_products" element={<AddProduct/>}/>
      <Route path="/product_profile" element={<ProductProfile/>}/>

     </Routes>
     </div>
    </div>
   
    </BrowserRouter>
  );
}

export default App;
