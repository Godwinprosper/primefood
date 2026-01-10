import { useState } from 'react'
import { drinksData } from '../../Data/beverages'
import { burgerData } from '../../Data/burger'
import { pastaData } from '../../Data/pastaData'
import { riceData } from '../../Data/riceData'
import { snacksData } from '../../Data/snacks'
import { chickenData } from '../../Data/chicken'
import { allProductData } from '../../Data/productData'
import './MenuOptions.css'

export function MenuOptions({ setProductData }) {
  const [checkedBtn, setCheckedBtn] = useState('all')


  const selectMenu = (event) => {
    
    const productCategory = event.target.value
    if (productCategory === 'rice') {
      setCheckedBtn('rice')
      setProductData(riceData)
    } else if (productCategory === 'pasta') {
      setCheckedBtn('pasta')
      setProductData(pastaData)
    } else if (productCategory === 'Chicken') {
      setCheckedBtn('Chicken')
      setProductData(chickenData)
    } else if (productCategory === 'Burgers') {
      setCheckedBtn('Burgers')
      setProductData(burgerData)
    } else if (productCategory === 'Snacks') {
      setCheckedBtn('Snacks')
      setProductData(snacksData)
    } else if (productCategory === 'Bevarages') {
      setCheckedBtn('Bevarages')
      setProductData(drinksData)
    } else if (productCategory === 'all') {
      setCheckedBtn('all')
      setProductData(allProductData)
    }

    
  }


  return (
    <>
      <div className='menu-btn-container'>
        <button 
          value={'all'} 
          onClick={selectMenu} 
          className={checkedBtn === 'all'? 'checkedMenu':'' }
        >
          All
        </button>

        <button 
          value={'rice'} 
          onClick={selectMenu} 
          className={checkedBtn === 'rice'? 'checkedMenu': ' '}
        >
          Rice
        </button>

        <button
          value={'pasta'} 
          onClick={selectMenu}
          className={checkedBtn === 'pasta'? 'checkedMenu': ' '}
        >
          Pasta & Noodles
        </button>

        <button 
          value={'Chicken'} 
          onClick={selectMenu}
          className={checkedBtn === 'Chicken'? 'checkedMenu': ' '}
        >
          Chicken
        </button>

        <button 
          value={'Burgers'} 
          onClick={selectMenu}
          className={checkedBtn === 'Burgers'? 'checkedMenu': ' '}
        >
          Burgers & Wraps
        </button>

        <button 
          value={'Snacks'} 
          onClick={selectMenu}
          className={checkedBtn === 'Snacks'? 'checkedMenu': ' '}
        >
          Snacks
        </button>

        <button 
          value={'Bevarages'} 
          onClick={selectMenu}
          className={checkedBtn === 'Bevarages'? 'checkedMenu': ' '}
        >
          Bevarages
        </button>


      </div>
      <div className='menu-select-container'>
        <select className='menu-select' name="menu-items" id="menu-items" placeholder="Select Menu Items" onChange={selectMenu}>
          <option value="all">All</option>
          <option value="rice">Rice</option>
          <option value="pasta">Pasta & Noodles</option>
          <option value="Chicken">Chicken</option>
          <option value="Burger">Burgers & Wraps</option>
          <option value="Snacks">Snacks</option>
          <option value="Bevarages">Bevarages</option>
        </select>
      </div>
    </>
  )
}