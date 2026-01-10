import { Reservation } from "../components/Reservation";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import './ReservationPage.css'

export function ReservationPage(){
  return(
    <>
      <Header/>
      <div className="reservationPage-section">
          <Reservation/>
      </div>
      <Footer/>
    </>
  )
}