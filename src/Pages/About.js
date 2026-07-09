import React from "react";
import "./CSS/About.css";
import bout from "../Components/Assets/bout us.jpg";
import mission from "../Components/Assets/ouur mission.jpg";
import {
  FaGlobe,
  FaHandshake,
  FaAward,
  FaShippingFast,
  FaCheckCircle,
  FaUsers,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="about-page">

      {/* Hero Section */}

      <section className="about-hero">

        <div className="about-heading">
          <span className="section-tag">About Our Company</span>

          <h1>Connecting Global Markets with Confidence</h1>

          <p>
           Hima International Ltd. is a trusted
            international trading company specializing in sourcing,
            procurement, manufacturing coordination, and global logistics.
            We help businesses around the world access high-quality products,
            dependable suppliers, and seamless supply chain solutions.
          </p>
        </div>

      </section>

      {/* About Company */}

      <section className="about-section">

        <div className="about-container">

          <div className="about-image">
            <img src={bout} alt="About Us" />
          </div>

          <div className="about-content">

            <h2>Who We Are</h2>

            <p>
              Hima International Ltd. is committed to
              simplifying international trade by connecting global buyers with
              trusted manufacturers and suppliers. Our expertise covers product
              sourcing, OEM manufacturing, procurement, quality inspection,
              export management, and logistics coordination.
            </p>

            <p>
              Through years of industry experience and an extensive supplier
              network, we have established ourselves as a reliable business
              partner dedicated to delivering quality products, competitive
              pricing, and exceptional customer service. Every partnership is
              built on trust, integrity, and long-term collaboration.
            </p>

          </div>

        </div>

      </section>

      {/* Mission */}

      <section className="about-section mission-section">

        <div className="about-container reverse">

          <div className="about-content">

            <h2>Our Mission</h2>

            <p>
              Our mission is to empower businesses through reliable sourcing,
              efficient procurement, and innovative supply chain solutions. We
              strive to exceed customer expectations by delivering superior
              quality, competitive pricing, and timely international delivery.
            </p>

            <p>
              By fostering strong relationships with manufacturers and clients,
              we create sustainable business opportunities that support mutual
              growth across global markets.
            </p>

          </div>

          <div className="about-image">
            <img src={mission} alt="Mission" />
          </div>

        </div>

      </section>

      {/* Vision */}

      <section className="vision-section">

        <h2>Our Vision</h2>

        <p>
          To become a globally recognized trading company known for excellence,
          innovation, and integrity while building long-term partnerships that
          drive international business success.
        </p>

      </section>

      {/* Core Values */}

      <section className="values-section">

        <h2>Our Core Values</h2>

        <div className="values-grid">

          <div className="value-card">
            <FaHandshake />
            <h3>Integrity</h3>
            <p>
              We conduct every business relationship with honesty,
              transparency, and professionalism.
            </p>
          </div>

          <div className="value-card">
            <FaAward />
            <h3>Quality</h3>
            <p>
              Every product undergoes careful sourcing and quality assurance to
              meet international standards.
            </p>
          </div>

          <div className="value-card">
            <FaShippingFast />
            <h3>Reliability</h3>
            <p>
              Timely delivery and dependable logistics are at the heart of our
              supply chain solutions.
            </p>
          </div>

          <div className="value-card">
            <FaUsers />
            <h3>Customer Focus</h3>
            <p>
              We understand every client's needs and provide customized trading
              solutions for lasting success.
            </p>
          </div>

        </div>

      </section>

      {/* Why Choose Us */}

      <section className="choose-section">

        <h2>Why Choose Us</h2>

        <div className="choose-grid">

          <div><FaCheckCircle /> Trusted Global Supplier Network</div>

          <div><FaCheckCircle /> Competitive Factory Pricing</div>

          <div><FaCheckCircle /> Professional Procurement Services</div>

          <div><FaCheckCircle /> OEM & Private Label Manufacturing</div>

          <div><FaCheckCircle /> International Shipping Support</div>

          <div><FaCheckCircle /> Dedicated Customer Service</div>

          <div><FaCheckCircle /> Strict Quality Inspection</div>

          <div><FaCheckCircle /> Long-Term Business Partnership</div>

        </div>

      </section>

      {/* CTA */}

      <section className="cta-section">

        <FaGlobe className="cta-icon"/>

        <h2>Let's Build Your Global Business Together</h2>

        <p>
          Whether you're an importer, distributor, wholesaler, or retailer,
          Hang zhong Huichang Ruida Trading Co., Ltd. is ready to become your
          trusted sourcing and international trading partner.
        </p>

        <button>Contact Us Today</button>

      </section>

    </div>
  );
};

export default About;