import React from 'react';
import "./CSS/Faq.css";

const Faq = () => {
  return (
    <div className='bodyy'>

      <div className="heading-containerfaq">
        <h1 className='faqh'>Frequently Asked Questions</h1>
      </div>

      <div className='mainn'>

        <details open>
          <summary>
            <h2 className='faqhh'>
              Are you a manufacturer or a trading company?
            </h2>
          </summary>
          <p className='faqp'>
            Hangzhong Huichang Ruida Trading Co., Ltd. is an international trading company that partners with trusted textile manufacturers to supply high-quality fabrics and textile products. We provide sourcing, OEM solutions, quality control, and export services for customers worldwide.
          </p>
        </details>

        <hr />

        <details>
          <summary>
            <h2 className='faqhh'>
              What types of fabrics do you supply?
            </h2>
          </summary>
          <p className='faqp'>
            We supply a wide range of fabrics including cotton, polyester, linen, denim, silk, rayon, canvas, knitted fabrics, blended textiles, upholstery fabrics, and industrial textile materials. Custom fabric sourcing is also available based on customer requirements.
          </p>
        </details>

        <hr />

        <details>
          <summary>
            <h2 className='faqhh'>
              Do you provide OEM and custom fabric production?
            </h2>
          </summary>
          <p className='faqp'>
            Yes. We offer OEM and private label services, including custom colors, fabric weights, patterns, finishes, packaging, and branding. Our team works closely with manufacturers to meet your exact specifications.
          </p>
        </details>

        <hr />

        <details>
          <summary>
            <h2 className='faqhh'>
              What is your minimum order quantity (MOQ)?
            </h2>
          </summary>
          <p className='faqp'>
            Our MOQ varies depending on the fabric type and customization requirements. Standard fabrics usually have lower MOQs, while customized orders may require higher quantities. Please contact us for specific product requirements.
          </p>
        </details>

        <hr />

        <details>
          <summary>
            <h2 className='faqhh'>
              How long does production and delivery take?
            </h2>
          </summary>
          <p className='faqp'>
            Sample orders are generally completed within 5–7 business days. Bulk production typically requires 15–30 days depending on the order size, customization, and production schedule. Shipping times vary by destination.
          </p>
        </details>

        <hr />

        <details>
          <summary>
            <h2 className='faqhh'>
              Do you ship internationally?
            </h2>
          </summary>
          <p className='faqp'>
            Yes. We export textile products to customers across Africa, Europe, North America, Asia, the Middle East, and other international markets using reliable global logistics partners.
          </p>
        </details>

        <hr />

        <details>
          <summary>
            <h2 className='faqhh'>
              How do you ensure product quality?
            </h2>
          </summary>
          <p className='faqp'>
            Every order undergoes quality inspection before shipment. We work with verified suppliers and conduct strict quality checks to ensure fabrics meet customer specifications and international standards.
          </p>
        </details>

        <hr />

        <details>
          <summary>
            <h2 className='faqhh'>
              What payment methods do you accept?
            </h2>
          </summary>
          <p className='faqp'>
            We accept secure international payment methods including bank transfers (T/T) and other mutually agreed payment options. Please contact our sales team for payment arrangements.
          </p>
        </details>

        <hr />

        <details>
          <summary>
            <h2 className='faqhh'>
              Can you provide fabric samples before bulk orders?
            </h2>
          </summary>
          <p className='faqp'>
            Yes. We encourage customers to request samples before placing large orders. This allows you to evaluate the fabric quality, texture, color, and finish before mass production begins.
          </p>
        </details>

      </div>

    </div>
  );
};

export default Faq;