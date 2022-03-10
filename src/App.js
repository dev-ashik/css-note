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
import Comments from './Components/Body/Comments/Comments';
import Colors from './Components/Body/Colors/Colors';
import Background from './Components/Body/Background/Background';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Home/>} />

          <Route path="addcss"  element={<Addcss/>} />

          <Route path="background"  element={<Background/>} />

          <Route path="comment"  element={<Comments/>} />
          <Route path="colors"  element={<Colors/>} />
          
          <Route path="selector"  element={<Selector/>} />


          
          <Route path="test"  element={<Test/>} />
        </Routes>
      </BrowserRouter>,
    </div>
  );
}

export default App;
