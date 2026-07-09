import React  from 'react'
import "slick-carousel/slick/slick.css";   
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Carousel.css";
import pic1 from "../Assets/Fabric/gee10.jpg"
import pic2 from "../Assets/Fabric/gee23.jpg"
import pic3 from "../Assets/Fabric/gee4.jpg"
import pic4 from "../Assets/Fabric/gee6.jpg"
import pic5 from "../Assets/Fabric/gee12.jpg"
import pic6 from "../Assets/Fabric/gee22.jpg"



function Carousel() {

    const settings = {
        dots: true,
        // infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed:2000,
        autoplaySpeed: 5000,
        cssEase:"linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 5,
              initialSlide: 2
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
  
      };



  return (
    <>
    <div className='bod'>
        <div className='slider'>
        <Slider {...settings}>

<div className='slider-div'>
  <h3 > Fabric</h3>
  <img src={pic1} alt="Chicks" className='cont' />
</div>

 <div className='slider-div'>
<h3> Coloured</h3>
<img src={pic2} alt="" className='cont' />
</div> 

<div className='slider-div'>
<h3>Smooth Fabric</h3>
<img src={pic3} alt="" className='cont' />
</div>

<div className='slider-div'>
<h3> Soft</h3>
<img src={pic4} alt="" className='cont'  />
</div>

<div className='slider-div'>
<h3> Plain</h3>
<img src={pic5} alt="" className='cont'  />
</div>

<div className='slider-div'>
<h3> Clean</h3>
<img src={pic6} alt="" className='cont'  />
</div>

</Slider>

        </div>
    </div>
    </>
  )
}


export default Carousel