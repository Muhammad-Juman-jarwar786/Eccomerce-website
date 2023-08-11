// import { Route, Routes } from 'react-router-dom';
// import Navbar from './components/navbar/Navbar';
// import Home from './pages/Home';
// import Shop from './pages/Shop';
// import Blog from './pages/Blog';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import './fonts/CustomFonts.css';
// import Footer from './components/footer/Footer';
// import SingleProduct from './components/singleProduct/SingleProduct';
// import Cart from './pages/Cart';

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/shop" element={<Shop />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/singleproduct" element={<SingleProduct />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="*" element={<Home />} />
//       </Routes>
//       <Footer />
//     </>
//   );
// }

// export default App;

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
// import PracticeApi from './components/productCard/PracticeApi';

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
          path="/singleproduct"
          element={
            <RouteTransition>
              <SingleProduct />
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
        {/* <Route path="/practiceapi" element={<PracticeApi />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
