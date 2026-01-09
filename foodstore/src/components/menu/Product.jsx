// import { useState } from 'react'
import {formatMoney} from '../../utils/money.js'
import './product.css'

export function Product({product}) {
  // const [quantity, setQuantity] = useState(1);
  return (
    <>
      <div className="card">

        <div className="product-image-container">
          <img src={`images/product/${product.image}`} alt="" />
        </div>

        <div className="product-detail">
          <div className="productName">{product.name}</div>
          <div className="product-description">{product.description}</div>
          <div className="producct-price-quantity-container">
            <div className="product-price">{formatMoney(product.priceCent)}</div>
            <div className="quantyAddToCart">
                <select className="productQuantity-selector" >
                  <option selected value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
            </div>
          </div>
          <div className='add-btn-container'>
            <button className='addToCart'>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  )
}