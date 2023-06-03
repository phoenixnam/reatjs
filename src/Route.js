import React from "react";
import About from "./Components/Router/About/About";
import Home from "./Components/Router/Home/Home";
import Contact from "./Components/Router/Topics/Contact";
const routes=[
    {
        path : '/',
        exact: true,
        main : ()=><Home/>
    },
    {
        path : '/contact',
        exact: true,
        main : ()=><Contact/>
    },
    {
        path : '/about',
        exact: true,
        main : ()=><About/>
    },
    // {
    //     path : '/about',
    //     exact: false,
    //     main : ()=><NotFount/>
    // },
  

]
export default routes;