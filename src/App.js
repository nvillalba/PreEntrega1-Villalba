import './App.css';
import Header from './components/header/navbar/navbar';
import ItemListContainer from './components/main/ItemListContainer/itemListContainer';
import CartWidget from './components/header/cartWidget/cartWidget';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/main/itemDetailContainer/itemDetailContainer';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<itemListContainer />}/>
        <Route path='/categoria/:categoria' element={<ItemListContainer />}/>        
        <Route path='/detalle/:id' element={<ItemDetailContainer />}/>              
        <Routes path='/' element={<CartWidget />}/>
      </Routes>
      {/* <Footer /> */}
    </ BrowserRouter>
  );
}

export default App;
