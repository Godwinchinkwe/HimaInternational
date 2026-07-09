import React from "react";
import "./CSS/Hero.css";

import Landing from "../Components/Landing/Landing";
import Popular from "../Components/Popular/Popular";
import Experience from "../Components/Experience/Experience";
import Carousel from "../Components/Carousel/Carousel";

import { useNavigate } from "react-router-dom";

import {
  FaSolarPanel,
  FaBatteryFull,
  FaGlobe,
  FaLeaf,
  FaShippingFast,
  FaCheckCircle,
  FaWarehouse,
  FaTools,
} from "react-icons/fa";

export default function Hero() {
  const navigate = useNavigate();

  const whyChoose = [
    "Premium Solar Panels",
    "Long-Life Solar Batteries",
    "Strict Quality Inspection",
    "Competitive Factory Pricing",
    "Fast Worldwide Shipping",
    "Reliable Technical Support",
    "Global Supply Chain",
    "Trusted International Partner",
  ];

  return (
    <div className="hero-page">

      <Landing />

      <Popular />

      {/* ABOUT */}

      <section className="company-intro">

        <div className="container">

          <span className="tag">
            Sustainable Energy Solutions
          </span>

          <h1>
            Powering the Future with Clean Renewable Energy
          </h1>

          <p>
            Hima International Ltd is a trusted international supplier
            specializing in high-quality Solar Panels, Solar Batteries
            and Renewable Energy products. We help businesses,
            contractors, distributors and homeowners access reliable
            clean energy solutions with competitive pricing and
            worldwide delivery.
          </p>

          <div className="feature-grid">

            <div className="card">
              <FaSolarPanel />
              <h3>Premium Solar Panels</h3>
              <p>
                High efficiency solar panels designed for residential,
                commercial and industrial projects.
              </p>
            </div>

            <div className="card">
              <FaBatteryFull />
              <h3>Solar Batteries</h3>
              <p>
                Reliable lithium energy storage systems for continuous
                power day and night.
              </p>
            </div>

            <div className="card">
              <FaGlobe />
              <h3>Worldwide Supply</h3>
              <p>
                Exporting renewable energy products to customers across
                the globe.
              </p>
            </div>

            <div className="card">
              <FaLeaf />
              <h3>Green Energy</h3>
              <p>
                Supporting a cleaner and more sustainable future through
                renewable technology.
              </p>
            </div>

            <div className="card">
              <FaShippingFast />
              <h3>Fast Logistics</h3>
              <p>
                Efficient international shipping and supply chain
                management.
              </p>
            </div>

            <div className="card">
              <FaWarehouse />
              <h3>Bulk Supply</h3>
              <p>
                Wholesale solar products for contractors, retailers and
                distributors.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}

      <section className="why">

        <div className="container">

          <h2>
            Why Choose Hima International Ltd
          </h2>

          <div className="checks">

            {whyChoose.map((item, index) => (

              <div className="check" key={index}>

                <FaCheckCircle />

                {item}

              </div>

            ))}

          </div>

          <div className="stats">

            <div>
              <h3>100+</h3>
              <span>Business Partners</span>
            </div>

            <div>
              <h3>30+</h3>
              <span>Countries Served</span>
            </div>

            <div>
              <h3>1000+</h3>
              <span>Successful Deliveries</span>
            </div>

            <div>
              <h3>99%</h3>
              <span>Customer Satisfaction</span>
            </div>

          </div>

        </div>

      </section>

      <Experience />

      <Carousel />

      {/* CTA */}

      <section className="cta">

        <FaTools className="cta-icon" />

        <h2>
          Ready to Switch to Solar Energy?
        </h2>

        <p>
          Whether you need Solar Panels, Solar Batteries or complete
          renewable energy solutions, our team is ready to help your
          project succeed.
        </p>

        <div className="company-address">

          <strong>Hima International Ltd</strong>

          <p>
            ROOM S239, 2/F, THE CAPITAL,
            <br />
            61–65 CHATHAM ROAD SOUTH,
            <br />
            TSIM SHA TSUI,
            <br />
            KOWLOON,
            <br />
            HONG KONG.
          </p>

        </div>

        <button onClick={() => navigate("/contact")}>
          Contact Us Today
        </button>

      </section>

    </div>
  );
}