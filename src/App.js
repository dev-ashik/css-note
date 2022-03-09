import './App.css';
import Layout from './Components/Layout/Layout';
import Test from './Components/Test/Test';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Selector from './Components/Selector/Selector';
import Addcss from './Components/Addcss/Addcss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="addcss"  element={<Addcss/>} />
          <Route path="selector"  element={<Selector/>} />


          
          <Route path="test"  element={<Test/>} />
        </Routes>
      </BrowserRouter>,
    </div>
  );
}

export default App;
