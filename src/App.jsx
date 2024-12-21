// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
      
//     </>
//   )
// }

// export default App














// import React, { useContext } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Cart from './components/Cart';
// import Checkout from './components/Checkout';
// import ProductList from './components/ProductList';
// import { ThemeContext } from './context/ThemeContext';
// import './styles.css';

// const App = () => {
//   const { theme } = useContext(ThemeContext);

//   return (
//     <div className={`app ${theme}`}>
//       <Router>
//         <Switch>
//           <Route path="/" exact component={ProductList} />
//           <Route path="/cart" component={Cart} />
//           <Route path="/checkout" component={Checkout} />
//         </Switch>
//       </Router>
//     </div>
//   );
// };

// export default App;













// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import CheckoutContextProvider from './context/CheckoutContext';
// import ThemeContextProvider from './context/ThemeContext';
// import Cart from './components/Cart';
// import Checkout from './components/Checkout';
// import ProductList from './components/ProductList';
// import ThemeToggler from './components/ThemeToggler';
// import './styles.css';

// const App = () => {
//   return (
//     <ThemeContextProvider>
//       <CheckoutContextProvider>
//         <Router>
//           <div className="app">
//             {/* Theme Toggle Button */}
//             <ThemeToggler />

//             <Routes>
//               {/* Route for displaying the product catalog */}
//               <Route path="/" element={<ProductList />} />
              
//               {/* Route for the cart */}
//               <Route path="/cart" element={<Cart />} />
              
//               {/* Route for the checkout process */}
//               <Route path="/checkout" element={<Checkout />} />
//             </Routes>
//           </div>
//         </Router>
//       </CheckoutContextProvider>
//     </ThemeContextProvider>
//   );
// };

// export default App;










import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ThemeContextProvider from './context/ThemeContext';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import ThemeToggler from './components/ThemeToggler';
import './styles.css';

const App = () => {
  return (
    <ThemeContextProvider>
      <Router>
        <div className="app">
          <ThemeToggler />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </Router>
    </ThemeContextProvider>
  );
};

export default App;
