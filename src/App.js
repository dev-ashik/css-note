import './App.css';
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
import Border from './Components/Body/Border/Border';
import Mesure from './Components/Body/Mesure/Mesure';
import Margins from './Components/Body/Margins/Margins';
import Padding from './Components/Body/Padding/Padding';
import HeightAndWidth from './Components/Body/HeightAndWidth/HeightAndWidth';
import Outline from './Components/Body/Outline/Outline';
import Text from './Components/Body/Text/Text';
import TextDecoration from './Components/Body/TextDecoration/TextDecoration';
import TextSpaceing from './Components/Body/TextSpaceing/TextSpaceing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Home/>} />

          <Route path="addcss"  element={<Addcss/>} />

          <Route path="background"  element={<Background/>} />
          <Route path="border"  element={<Border/>} />

          <Route path="comment"  element={<Comments/>} />
          <Route path="colors"  element={<Colors/>} />

          <Route path="heightandwidth"  element={<HeightAndWidth/>} />
          
          <Route path="margins"  element={<Margins/>} />
          <Route path="mesure"  element={<Mesure/>} />

          <Route path="outline"  element={<Outline/>} />

          <Route path="padding"  element={<Padding/>} />

          <Route path="selector"  element={<Selector/>} />

          <Route path="text"  element={<Text/>} />
          <Route path="textdecoration"  element={<TextDecoration/>} />
          <Route path="textspaceing"  element={<TextSpaceing/>} />
          
          <Route path="test"  element={<Test/>} />
        </Routes>
      </BrowserRouter>,
    </div>
  );
}

export default App;
