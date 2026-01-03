import { Header } from "../../components/Header";
import { HeroSection } from "./HeroSection";
import { SpecialOffer } from "./SpecialOffer";
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
      </div>
    </>
  )
}