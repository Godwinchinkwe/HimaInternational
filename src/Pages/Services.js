import React from "react";
import "./CSS/Service.css";

import {
  FaSolarPanel,
  FaBatteryFull,
  FaBolt,
  FaTools,
  FaLeaf,
  FaWarehouse,
  FaCheckCircle,
} from "react-icons/fa";

const Services = () => {
  return (
    <section className="services">

      <div className="services-header">
        <span className="services-tag">
          Renewable Energy Solutions
        </span>

        <h1>
          Complete Solar Energy Products & Solutions
        </h1>

        <p>
          Hima International Ltd supplies premium-quality solar panels,
          solar batteries, and high junction boxes for residential,
          commercial, and industrial applications. Our mission is to
          provide reliable renewable energy products that improve
          efficiency, reduce electricity costs, and support a cleaner,
          more sustainable future.
        </p>
      </div>

      <div className="services-grid">

        <div className="service-card">
          <div className="service-icon">
            <FaSolarPanel />
          </div>

          <h2>Solar Panels</h2>

          <p>
            High-performance solar panels designed for maximum energy
            generation, long-term durability, and outstanding efficiency
            under different weather conditions.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <FaBatteryFull />
          </div>

          <h2>Solar Batteries</h2>

          <p>
            Reliable energy storage solutions including deep-cycle and
            lithium batteries that provide dependable backup power for
            homes and businesses.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <FaBolt />
          </div>

          <h2>High Junction Boxes</h2>

          <p>
            Premium-quality junction boxes built to ensure safe electrical
            distribution, excellent protection, and dependable system
            performance.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <FaWarehouse />
          </div>

          <h2>Bulk Solar Supply</h2>

          <p>
            Wholesale supply of quality solar equipment for contractors,
            installers, distributors, retailers, and large infrastructure
            projects.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <FaTools />
          </div>

          <h2>Installation Support</h2>

          <p>
            Professional guidance and technical support to help installers
            and businesses choose the right solar products for every
            project.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <FaLeaf />
          </div>

          <h2>Renewable Energy Consulting</h2>

          <p>
            Helping customers transition to sustainable energy with
            practical solar solutions tailored to their power requirements
            and budget.
          </p>
        </div>

      </div>

      <section className="stats-section">

        <div className="stat-box">
          <h2>10+</h2>
          <p>Years Experience</p>
        </div>

        <div className="stat-box">
          <h2>500+</h2>
          <p>Projects Supported</p>
        </div>

        <div className="stat-box">
          <h2>100%</h2>
          <p>Quality Products</p>
        </div>

        <div className="stat-box">
          <h2>24/7</h2>
          <p>Customer Support</p>
        </div>

      </section>

      <section className="why-section">

        <h2>Why Choose Hima International Ltd?</h2>

        <p>
          We are committed to delivering premium solar products with
          exceptional quality, competitive pricing, and dependable customer
          support. Every product is carefully selected to ensure maximum
          performance and long-lasting value.
        </p>

        <div className="feature-grid">

          <div className="feature-item">
            <FaCheckCircle />
            <span>Premium Solar Products</span>
          </div>

          <div className="feature-item">
            <FaCheckCircle />
            <span>Reliable Energy Solutions</span>
          </div>

          <div className="feature-item">
            <FaCheckCircle />
            <span>Competitive Pricing</span>
          </div>

          <div className="feature-item">
            <FaCheckCircle />
            <span>Fast Product Delivery</span>
          </div>

          <div className="feature-item">
            <FaCheckCircle />
            <span>Technical Support</span>
          </div>

          <div className="feature-item">
            <FaCheckCircle />
            <span>Trusted Business Partner</span>
          </div>

        </div>

      </section>

      <section className="cta-section">

        <h2>Ready to Power Your Next Project?</h2>

        <p>
          Partner with Hima International Ltd for dependable solar products
          that combine quality, efficiency, and long-term performance.
        </p>

        <a href="/contact" className="cta-btn">
          Request a Quote
        </a>

      </section>

    </section>
  );
};

export default Services;