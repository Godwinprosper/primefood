import { Header } from "../../components/Header";
import { Menu } from "../../components/menu/Menu.jsx";
import { HeroSection } from "./HeroSection";
import { SpecialOffer } from "./SpecialOffer";
import { About } from "../../components/About.jsx";
import {Reservation} from "../../components/Reservation.jsx"
import { CustomerReview } from "./CustomerReview.jsx";
import { Footer } from "../../components/Footer.jsx";
import './HomePage.css'

export function HomePage(){
  return(
    <>
      <link rel="icon" type="image/svg+xml" href='home.svg' />
      <title>Home</title>
      <Header />

      <div className="home-page-container">
        <HeroSection/>
        <SpecialOffer/>
        <Menu/>
        <About/>
        <div className="reservation-section">
          <Reservation/>
        </div>
        <CustomerReview/>
        <Footer/>
      </div>
    </>
  )
}