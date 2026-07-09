import React from 'react'
import "./Landing.css"
import tent1 from "../Assets/Fabric/Hero1.jpg"
import tent2 from "../Assets/Fabric/Gee1.jpg"
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {useNavigate} from "react-router-dom"
import Typewriter from "typewriter-effect"

const Landing = () => {
  const navigate = useNavigate();

    return (
        <div>
        <div class="cantainer">
          <div class="cantainer__left">
            <h1>Hima International Ltd.</h1>
           
            <p><span ><Typewriter options={{
                            strings : [ "The company is committed to providing high-quality products.","... ", "Where Every Fabric Tells a Story." ],
                            loop: true,
                            autoStart:true,
                            typeSpeed: 120,
                            backSpeed: 80,
                            backDelay:1000,
                            deleteSpeed:10,
                        }}/> </span>
           </p>
            <br></br>
            <div class="cantainer__btn">
              <button class="btn" onClick={() =>  navigate('gallery/')}>SHOP NOW</button>
            </div>
          </div>
          <div class="cantainer__right">
            <div class="images">
              <img src={tent1} alt="tent-1" class="tent-1" />
              <img src={tent2} alt="tent-2" class="tent-2" />
            </div>
            <div class="contentx">
              <h4>High Quality Product</h4>
              <h2> Hima </h2>
              <h3>Hima International Ltd</h3>
              <p>
           Hang Zhou Huichang Ruida Trading Co., Ltd is a trading company specializing in the sourcing, distribution, and export of a wide range of industrial, commercial, and consumer products. The company is committed to providing high-quality products, competitive pricing, and efficient supply chain solutions to customers in both domestic and international markets.
    
              </p>
            </div>
          </div>
          <div class="location" onClick={() =>  navigate('contact/')}>
            <span><FaLocationDot /></span>
            OUR LOCATION
          </div>
          <div class="socials">
            <span>
            <FaFacebook />
            </span>
            <span>
            <FaInstagramSquare />
            </span>
            <span>
            <FaXTwitter />
            </span>
          </div>
        </div>
    
        </div>
      )
}

export default Landing