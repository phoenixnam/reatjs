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
import User from "../Do_an/Admin/User";
import Project from "../Do_an/Admin/Project";
import MyForm from "../Do_an/Form";


function App(){
  return(
    <>
<User/>
{/* <Project></Project> */}
<Project></Project>
<MyForm></MyForm>
    </>
  )
}
export default App;