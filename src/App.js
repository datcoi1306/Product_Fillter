import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './Componets/Navbar/Navbar';
import ProductContext from './Componets/ProductCotext/ProducteContext';
import Iphone from './Pages/IphoneFillter/Iphone';
import Ipad from './Pages/IpadFillter/Ipad';
import Home from './Pages/Home/Home';
import PriceLarge from './Pages/PriceLarge/PriceLarge';
import PriceBetween from './Pages/PriceBetween/PriceBetween';

function App() {

  return (
    <div className="App">
      <ProductContext>
        <Router>
          <Navbar>
            <Routes>
            <Route path="/500<p<1000" element={<PriceBetween/>} />
            <Route path="/p>500" element={<PriceLarge/>} />
              <Route path="/" element={<Home/>} />
              <Route path="/iphone" element={<Iphone />} />
              <Route path="/ipad" element={<Ipad />} />
            </Routes>
          </Navbar>
        </Router>
      </ProductContext>
    </div>
  );
}

export default App;
