import {useState} from 'react'
import { Product } from './product'
import { MenuOptions } from './MenuOtions'
import { allProductData } from '../../Data/productData'
import './menu.css'

export function Menu(){
  const [productData, setProductData] = useState(allProductData)

  return(
    <div className='menu-section'>
      <div className="menu-title">Our Menu</div>

      {/* Menu Options Component */}
      <MenuOptions setProductData={setProductData}/>

      <div className="menu-items-container">
        {productData.map((product)=>{
          return(
            <Product key={product.id} product={product} />
          )
        })}
      </div>
      
    </div>
  )
}