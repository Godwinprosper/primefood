import { Header } from '../../components/Header'
import { Menu } from '../../components/menu/Menu'
import { Footer } from '../../components/Footer'
import './Menupage.css'

export function MenuPage(){
  return(
    <>
      <Header/>
      <div className="menu-page-container">
        <Menu/>
        <Footer/>
      </div>

    </>
  )
}