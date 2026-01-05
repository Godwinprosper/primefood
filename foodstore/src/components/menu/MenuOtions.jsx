import './MenuOptions.css'
export function MenuOptions(){
  return(
    <>
      <div className='menu-btn-container'>
        <button>All</button>
        <button>Rice</button>
        <button>Pasta & Noodles</button>
        <button>Chicken</button>
        <button>Burgers & Wraps</button>
        <button>Snacks</button>
        <button>Bevarages</button>
      </div>
      <div className='menu-select-container'>
        <select className='menu-select' name="menu-items" id="menu-items" placeholder="Select Menu Items">
          <option value="1">All</option>
          <option value="2">Rice</option>
          <option value="3">Pasta & Noodles</option>
          <option value="4">Chicken</option>
          <option value="5">Burgers & Wraps</option>
          <option value="6">Snacks</option>
          <option value="7">Bevarages</option>
        </select>
      </div>
    </>
  )
}