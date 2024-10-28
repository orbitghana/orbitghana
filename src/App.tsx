import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import AOS from "aos";
import './App.css'
import { HomePg } from "./pages";
import { useEffect } from "react";
import 'swiper/css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

  useEffect(() =>{
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  })
  
  function Root() {
    return (
      <Routes>
        <Route path="/" element={<HomePg />} />
      </Routes>
    )
  }

  const router = createBrowserRouter([{
    path: "*",
    Component: Root
  }])
 
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
