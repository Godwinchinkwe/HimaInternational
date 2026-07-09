import React from 'react'
import "./Landing.css"
import tent1 from "../Assets/Fabric/Gee1.jpg"
// import tent2 from "../Assets/Fabric/Gee1.jpg"
import { FaLocationDot } from "react-icons/fa6";
// import { FaFacebook } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
import {useNavigate} from "react-router-dom"
import Typewriter from "typewriter-effect"

const Landing = () => {
  const navigate = useNavigate();

    return (
        <div className="hero">

  <div className="hero-left">

    <span className="tag">
      Sustainable Energy Solutions
    </span>

    <h1>
      Powering Homes & Businesses
      <br />
      with Reliable Solar Energy
    </h1>

    <p>
      <Typewriter
        options={{
          strings: [
            "Premium Solar Panels",
            "High Capacity Solar Batteries",
            "Clean Energy Solutions",
            "Trusted International Supplier"
          ],
          autoStart: true,
          loop: true
        }}
      />
    </p>

    <div className="hero-buttons">

      <button
        className="primary-btn"
        onClick={() => navigate("/gallery")}
      >
        Explore Products
      </button>

      <button
        className="secondary-btn"
        onClick={() => navigate("/contact")}
      >
        Contact Us
      </button>

    </div>

    <div className="company-card">

      <h3>Hima International Ltd.</h3>

      <p>
        Supplier of premium Solar Panels, Solar Batteries and
        Renewable Energy Equipment.
      </p>

      <div className="address">

        <FaLocationDot />

        ROOM S239, 2/F, THE CAPITAL,
        61–65 CHATHAM ROAD SOUTH,
        TSIM SHA TSUI,
        KOWLOON,
        HONG KONG.

      </div>

    </div>

  </div>



  <div className="hero-right">

      <img src={tent1} alt="Solar Panels" />

  </div>

</div>
      )
}

export default Landing