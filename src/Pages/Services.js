import React from "react";
import "./CSS/Service.css";

import {
  FaGlobeAsia,
  FaShippingFast,
  FaBoxes,
  FaHandshake,
  FaClipboardCheck,
  FaIndustry,
} from "react-icons/fa";

const Services = () => {
  return (
    <section className="services-cont">

      <div className="service-title">
        <span className="section-tag">What We Offer</span>

        <h1>Comprehensive Trading & Supply Chain Solutions</h1>

        <p>
          Hang Zhou Huichang Ruida Trading Co., Ltd is committed to providing
          world-class sourcing, procurement, manufacturing, and logistics
          solutions for businesses around the globe. With an extensive network
          of trusted suppliers and manufacturers, we help our clients obtain
          high-quality products at competitive prices while ensuring efficient,
          reliable, and transparent trading processes from production to final
          delivery.
        </p>
      </div>

      <div className="services-services">

        <div className="services-card">
          <div className="services-icon">
            <FaGlobeAsia />
          </div>

          <h2>Global Product Sourcing</h2>

          <p>
            We identify and connect businesses with reliable manufacturers and
            suppliers across multiple industries. Our sourcing specialists
            ensure every product meets your quality expectations, budget, and
            delivery timeline.
          </p>
        </div>

        <div className="services-card">
          <div className="services-icon">
            <FaIndustry />
          </div>

          <h2>OEM & Private Label Manufacturing</h2>

          <p>
            Bring your ideas to life through customized manufacturing
            solutions. We offer OEM and private label services with flexible
            production volumes, helping businesses build unique brands while
            maintaining exceptional product quality.
          </p>
        </div>

        <div className="services-card">
          <div className="services-icon">
            <FaShippingFast />
          </div>

          <h2>International Logistics</h2>

          <p>
            Our logistics team manages international shipping, customs
            documentation, freight coordination, and delivery scheduling,
            ensuring smooth transportation by sea, air, or land to destinations
            worldwide.
          </p>
        </div>

        <div className="services-card">
          <div className="services-icon">
            <FaClipboardCheck />
          </div>

          <h2>Quality Inspection & Assurance</h2>

          <p>
            Quality is at the heart of everything we do. We conduct strict
            product inspections, supplier evaluations, and quality control
            procedures before shipment to ensure every order meets
            international standards.
          </p>
        </div>

        <div className="services-card">
          <div className="services-icon">
            <FaBoxes />
          </div>

          <h2>Wholesale Supply</h2>

          <p>
            We supply a wide variety of industrial, commercial, and consumer
            products to wholesalers, retailers, distributors, and corporate
            buyers, offering competitive pricing and dependable supply chain
            management.
          </p>
        </div>

        <div className="services-card">
          <div className="services-icon">
            <FaHandshake />
          </div>

          <h2>Procurement & Business Partnership</h2>

          <p>
            We build long-term partnerships with businesses by delivering
            tailored procurement solutions, transparent communication, and
            professional support that helps clients reduce costs and achieve
            sustainable growth in international markets.
          </p>
        </div>

      </div>

      <div className="why-choose-us">

        <h2>Why Choose Hangzhong Huichang Ruida Trading Co., Ltd.?</h2>

        <p>
          Our mission is to simplify international trade by delivering
          dependable sourcing solutions backed by professionalism, integrity,
          and innovation. Every project is handled with attention to detail,
          ensuring efficiency, quality, and customer satisfaction from inquiry
          to delivery.
        </p>

        <div className="features">

          <div className="feature">
            ✓ Trusted Global Supplier Network
          </div>

          <div className="feature">
            ✓ Strict Quality Control Standards
          </div>

          <div className="feature">
            ✓ Competitive Pricing
          </div>

          <div className="feature">
            ✓ Fast & Secure International Shipping
          </div>

          <div className="feature">
            ✓ Professional Customer Support
          </div>

          <div className="feature">
            ✓ Long-Term Business Partnerships
          </div>

        </div>

      </div>

    </section>
  );
};

export default Services;