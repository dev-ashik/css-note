import './App.css';
import Test from './Components/Body/Normal/Test/Test';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Colors from './Components/Body/Normal/Colors/Colors';
import Background from './Components/Body/Normal/Background/Background';
import Margins from './Components/Body/Normal/Margins/Margins';
import Padding from './Components/Body/Normal/Padding/Padding';
import HeightAndWidth from './Components/Body/Normal/HeightAndWidth/HeightAndWidth';
import TextSpaceing from './Components/Body/Normal/TextSpaceing/TextSpaceing';
import RoundedCorner from './Components/Body/Advanced/RoundedCorner/RoundedCorner';
import BorderImages from './Components/Body/Advanced/BorderImages/BorderImages';
import Addcss from './Components/Body/Normal/Addcss/Addcss';
import Comments from './Components/Body/Normal/Comments/Comments';
import Home from './Components/Body/Normal/Home/Home';
import Border from './Components/Body/Normal/Border/Border';
import DropDown from './Components/Body/Normal/DropDown/DropDown';
import Fonts from './Components/Body/Normal/Fonts/Fonts';
import Icons from './Components/Body/Normal/Icons/Icons';
import Image from './Components/Body/Normal/Image/Image';
import ImageSprites from './Components/Body/Normal/ImageSprites/ImageSprites';
import Links from './Components/Body/Normal/Links/Links';
import Lists from './Components/Body/Normal/Lists/Lists';
import Mesure from './Components/Body/Normal/Mesure/Mesure';
import Outline from './Components/Body/Normal/Outline/Outline';
import Selector from './Components/Body/Normal/Selector/Selector';
import Text from './Components/Body/Normal/Text/Text';
import TextDecoration from './Components/Body/Normal/TextDecoration/TextDecoration';
import Tables from './Components/Body/Normal/Tables/Tables';
import FontSize from './Components/Body/Normal/Fonts/FontSize';
import AdvancedBackground from './Components/Body/Advanced/AdvancedBackground/AdvancedBackground';
import ColorKeyWords from './Components/Body/Advanced/ColorKeyWords/ColorKeyWords';
import Gradients from './Components/Body/Advanced/Gradients/Gradients';
import Shadow from './Components/Body/Advanced/Shadow/Shadow';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Home/>} />

          <Route path="addcss"  element={<Addcss/>} />

          <Route path="background"  element={<Background/>} />
          <Route path="advancedbackground"  element={<AdvancedBackground/>} />
          <Route path="border"  element={<Border/>} />
          <Route path="borderimages"  element={<BorderImages/>} />

          <Route path="comment"  element={<Comments/>} />
          <Route path="colors"  element={<Colors/>} />
          <Route path="colorkeyword"  element={<ColorKeyWords/>} />

          <Route path="dropdown"  element={<DropDown/>} />

          <Route path="fonts"  element={<Fonts/>} />
          <Route path="fontsize"  element={<FontSize/>} />

          <Route path="gradients"  element={<Gradients/>} />

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
          <Route path="shadow"  element={<Shadow/>} />

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
