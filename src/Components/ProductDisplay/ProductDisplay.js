import React from 'react'
import "./ProductDisplay.css"
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { useParams } from 'react-router-dom'
import all_product from '../Assets/all_product'
// import data from "../Assets/data"


const ProductDisplay = () => {
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  // const product = dada.find((e)=> e.id === Number(productId));
  // const {products} = props;
  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
        <div className='productdisplay-img-list'>
           <img src={product.image} alt="" />
           <img src={product.image} alt="" />
           <img src={product.image} alt="" />
           <img src={product.image} alt="" />
        </div>
        <div className='productdisplay-img'>
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className='productdisplay-right'>
        <h1>{product.name}</h1>
        <div className='productdisplay-right-star'>
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className='productdisplay-right-prices'>
          <div className='productdisplay-right-price-old'>#{product.old_price}</div>
          <div className='productdisplay-right-price-new'>#{product.new_price}</div>
        </div>
        <div className='productdisplay-right-description'>
          Harness clean, renewable energy with our high-efficiency solar panels, designed to deliver reliable performance, maximum power output, and long-lasting durability for residential, commercial, and industrial applications
        </div>
        <div className='productdisplay-right-size'>
          <h1>Premium High Quality Products</h1>
          <div className='productdisplay-right-sizes'>
            {/* <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div> */}
          </div>
          <a target="_blank" rel="noreferrer" href="wa.link/j6fezi"><button>Order Now</button></a>
          <p className='productdisplay-right-category'><span>Category:</span> Solar</p>
          <p className='productdisplay-right-category'><span>Tags</span> High Quality </p>

        </div>
      </div>
    </div>
  )
}

export default ProductDisplay