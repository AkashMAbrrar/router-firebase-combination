import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './comoponents/Header/Header';
import Home from './comoponents/Home/Home';
import Login from './comoponents/Login/Login';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
