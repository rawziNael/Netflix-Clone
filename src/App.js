import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home'
import FavList from './Components/FavList/FavList';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/favorite' exact element={<FavList/>} />
    </Routes>
    </div>
  )
}

export default App;
