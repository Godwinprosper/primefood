import { Product } from './product'
import { MenuOptions } from './MenuOtions'
import { allProductData } from '../../Data/productData'
import './menu.css'

export function Menu(){

  return(
    <div className='menu-section'>
      <div className="menu-title">Our Menu</div>

      {/* Menu Options Component */}
      <MenuOptions/>

      <div className="menu-items-container">
        {allProductData.map((product)=>{
          return(
            <Product key={product.id} product={product}/>
          )
        })}
      </div>
      
    </div>
  )
}