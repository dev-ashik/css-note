import './App.css';
import Test from './Components/Body/Normal/Test/Test';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Body/Home/Home';
import Addcss from './Components/Body/Addcss/Addcss';
import Comments from './Components/Body/Comments/Comments';
import Colors from './Components/Body/Normal/Colors/Colors';
import Background from './Components/Body/Normal/Background/Background';
import Border from './Components/Body/Border/Border';
import Mesure from './Components/Body/Mesure/Mesure';
import Margins from './Components/Body/Normal/Margins/Margins';
import Padding from './Components/Body/Normal/Padding/Padding';
import HeightAndWidth from './Components/Body/Normal/HeightAndWidth/HeightAndWidth';
import Outline from './Components/Body/Outline/Outline';
import Text from './Components/Body/Text/Text';
import TextDecoration from './Components/Body/TextDecoration/TextDecoration';
import TextSpaceing from './Components/Body/Normal/TextSpaceing/TextSpaceing';
import Selector from './Components/Body/Selector/Selector';
import Fonts from './Components/Body/Fonts/Fonts';
import FontSize from './Components/Body/Fonts/FontSize';
import Icons from './Components/Body/Icons/Icons';
import Links from './Components/Body/Links/Links';
import Lists from './Components/Body/Lists/Lists';
import Tables from './Components/Body/Tables/Tables';
import DropDown from './Components/Body/DropDown/DropDown';
import Image from './Components/Body/Image/Image';
import ImageSprites from './Components/Body/ImageSprites/ImageSprites';
import RoundedCorner from './Components/Body/Advanced/RoundedCorner/RoundedCorner';
import BorderImages from './Components/Body/Advanced/BorderImages/BorderImages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Home/>} />

          <Route path="addcss"  element={<Addcss/>} />

          <Route path="background"  element={<Background/>} />
          <Route path="border"  element={<Border/>} />
          <Route path="borderimages"  element={<BorderImages/>} />

          <Route path="comment"  element={<Comments/>} />
          <Route path="colors"  element={<Colors/>} />

          <Route path="dropdown"  element={<DropDown/>} />

          <Route path="fonts"  element={<Fonts/>} />
          <Route path="fontsize"  element={<FontSize/>} />

          <Route path="heightandwidth"  element={<HeightAndWidth/>} />

          <Route path="icons"  element={<Icons/>} />
          <Route path="image"  element={<Image/>} />
          <Route path="imagesprites"  element={<ImageSprites/>} />
          
          <Route path="links"  element={<Links/>} />
          <Route path="lists"  element={<Lists/>} />

          <Route path="margins"  element={<Margins/>} />
          <Route path="mesure"  element={<Mesure/>} />

          <Route path="outline"  element={<Outline/>} />

          <Route path="padding"  element={<Padding/>} />

          <Route path="roundedcorners"  element={<RoundedCorner/>} />

          <Route path="selector"  element={<Selector/>} />

          <Route path="text"  element={<Text/>} />
          <Route path="textdecoration"  element={<TextDecoration/>} />
          <Route path="textspaceing"  element={<TextSpaceing/>} />
          <Route path="tables"  element={<Tables/>} />
          
          <Route path="test"  element={<Test/>} />
        </Routes>
      </BrowserRouter>,
    </div>
  );
}

export default App;
