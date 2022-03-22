import './App.css';
import Test from './Components/Body/Test/Test';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Body/Home/Home';
import Addcss from './Components/Body/Addcss/Addcss';
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
import Selector from './Components/Body/Selector/Selector';
import Fonts from './Components/Body/Fonts/Fonts';
import FontSize from './Components/Body/Fonts/FontSize';
import Icons from './Components/Body/Icons/Icons';

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

          <Route path="fonts"  element={<Fonts/>} />
          <Route path="fontsize"  element={<FontSize/>} />

          <Route path="heightandwidth"  element={<HeightAndWidth/>} />

          <Route path="icons"  element={<Icons/>} />
          
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
