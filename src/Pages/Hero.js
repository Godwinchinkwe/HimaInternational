
import React from "react";
import "./CSS/Hero.css";
import Landing from "../Components/Landing/Landing";
import Popular from "../Components/Popular/Popular";
import Experience from "../Components/Experience/Experience";
import Carousel from "../Components/Carousel/Carousel";
import {useNavigate} from "react-router-dom"
import {
  FaGlobe,FaHandshake,FaShippingFast,FaClipboardCheck,
  FaIndustry,FaBoxes,FaCheckCircle
} from "react-icons/fa";

export default function Hero(){
   const navigate = useNavigate();
return (
<div className="hero-page">
  <Landing/>
  <Popular/>

  <section className="company-intro">
    <div className="container">
      <span className="tag">Global Trading Excellence</span>
      <h1>Reliable International Trading & Supply Chain Solutions</h1>
      <p>Hang Zhou Huichang Ruida Trading Co., Ltd partners with manufacturers and businesses worldwide to deliver dependable sourcing, OEM production, procurement, quality control and international logistics.</p>

      <div className="feature-grid">
        <div className="card"><FaGlobe/><h3>Global Network</h3><p>Trusted suppliers and manufacturers across multiple industries.</p></div>
        <div className="card"><FaHandshake/><h3>Trusted Partnership</h3><p>Transparent communication and long‑term business relationships.</p></div>
        <div className="card"><FaShippingFast/><h3>Worldwide Logistics</h3><p>Efficient export documentation and shipping coordination.</p></div>
        <div className="card"><FaClipboardCheck/><h3>Quality Assurance</h3><p>Inspection and quality control before shipment.</p></div>
        <div className="card"><FaIndustry/><h3>OEM & Private Label</h3><p>Flexible manufacturing for growing brands.</p></div>
        <div className="card"><FaBoxes/><h3>Wholesale Supply</h3><p>Competitive sourcing for distributors and retailers.</p></div>
      </div>
    </div>
  </section>

  <section className="why">
    <div className="container">
      <h2>Why Choose Us</h2>
      <div className="checks">
        {[
          "Competitive Factory Pricing","Verified Supplier Network",
          "Strict Quality Standards","Fast Global Shipping",
          "Professional Procurement","Responsive Customer Support",
          "Flexible OEM Solutions","Long‑Term Business Partnership"
        ].map((t,i)=><div className="check" key={i}><FaCheckCircle/>{t}</div>)}
      </div>

      <div className="stats">
        <div><h3>50+</h3><span>Trusted Suppliers</span></div>
        <div><h3>20+</h3><span>Countries Served</span></div>
        <div><h3>999+</h3><span>Orders Supported</span></div>
        <div><h3>99%</h3><span>Customer Focus</span></div>
      </div>
    </div>
  </section>

  <Experience/>
  <Carousel/>

  <section className="cta">
    <h2>Hang Zhou Huichang Ruida Trading Co., Ltd</h2>
    <p>Address: Building 5, No. 1910 Youyi Road, Guali
District, Hang Zhou, Zhejiang 311241, China</p>
    <button  onClick={() =>  navigate('contact/')}>Contact Us Today</button>
  </section>
</div>);
}
