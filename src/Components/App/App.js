// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import routes from '../../Route';

// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         {routes.map((route, index) => (
//           <Route
//             key={index}
//             path={route.path}
//             element={<route.main />}
//             exact={route.exact}
//           />
//         ))}
//       </Routes>
//     </Router>
//   );
// }


// import React, {Component} from 'react';
// import Add from '../Add';
// import './App.css';

// import ProductList from '../Midterm/ProductList';
// // import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// class App extends Component {
//   render(){
//   return (
//   <>

// <ProductList></ProductList>


//     </>
//   )
//   }

// }

// export default App;

// import './App.css';
// import Header from '../Midterm/Header';
// import Footer from '../footer/Footer';
// import Admin from '../Midterm/Admin';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Show from '../Midterm/ShowProduct';
// import Cart from '../Midterm/Cart';
// function App() {
//   return (
    
//       <Router>
//          <Header/>
//          <Routes>
//          <Route path='/' element={<Show/>}/>
//             <Route path='/Cart' element={<Cart/>}/>
//             <Route path='/Admin' element={<Admin/>}/>;
//          </Routes>
         
//          </Router>
    
     
//   );
// }
// export default App;

import React from "react";
import AllProject from "../Do_an/AllProject";
function App(){
   <>  
      <AllProject></AllProject>
   </>
}
export default App;