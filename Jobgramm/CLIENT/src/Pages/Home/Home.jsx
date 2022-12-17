import React from 'react'
import Header from '../../Components/Header/Header';
import SvgForhome from '../../Components/Svg/SvgForhome';
import Footer from '../../Components/Footer/Footer';
import AnimateWords from '../../Components/AnimateWords/AnimateWords';
// import Slider from '../../Components/Slider/Slider';
// import Gif from '../Images/Gif.gif';
// import HomePageAnim from '../../Components/HomePageAnimations/HomePageAnim';
import { GetUserData,GetAllUsers } from "../../Redux/Reducers/UserSignUpReducers";
import { useDispatch, useSelector } from "react-redux/es/exports";
import './home.css'
import axios from 'axios';
export default function Home() {
  
  return (
    <div style={{textAlign:"center"}} className='home'>
        <Header />

        <div className='textcontent' >

        <h1 >İstədiyiniz işi tapa biləcəyiniz Böyük platforma</h1>
        <h2>İş üçün müraciət et, mütləq xəbər alacaqsan</h2>

        </div>

        

        {/* <AnimateWords /> */}
        

        <Footer />


    </div>
  )
}
