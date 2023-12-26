import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import style from "./App.module.css";


import './App.css'
import InformationProduct from './components/InformationProduct/InformationProduct';
import Footer from './components/Footer/Footer';
import PopularCategory from './components/PopularCategory/PopularCategory';
import Slider from './components/Slider/Slider';
import Trend from './components/Trend/Trend';
import BestSelling from './components/BestSelling/BestSelling';
import Header from './components/Header/Header';


function App() {


  return (
    <>

      <Header />

      {/* index carrousel */}


      <Slider />

      {/* index carrousel */}
      <Trend />

      <PopularCategory />

      <BestSelling />



      <InformationProduct />



      <Footer />
      {/* footer */}



    </>
  )
}

export default App
