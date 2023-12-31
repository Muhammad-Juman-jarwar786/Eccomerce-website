import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import './fonts/CustomFonts.css';
import Footer from './components/footer/Footer';
import SingleProduct from './components/singleProduct/SingleProduct';
import Cart from './pages/Cart';
import { RouteTransition } from './animation/FlipPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <RouteTransition>
              <Home />
            </RouteTransition>
          }
        />
        <Route
          path="/shop"
          element={
            <RouteTransition>
              <Shop />
            </RouteTransition>
          }
        />
        <Route
          path="/blog"
          element={
            <RouteTransition>
              <Blog />
            </RouteTransition>
          }
        />
        <Route
          path="/about"
          element={
            <RouteTransition>
              <About />
            </RouteTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <RouteTransition>
              <Contact />
            </RouteTransition>
          }
        />
        <Route
          path="/cart"
          element={
            <RouteTransition>
              <Cart />
            </RouteTransition>
          }
        />
        <Route
          path="/singleproduct/:pid"
          element={
            <RouteTransition>
              <SingleProduct />
            </RouteTransition>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
