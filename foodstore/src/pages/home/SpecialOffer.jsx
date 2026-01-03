import { offers } from '../../Data/offers'
import './SpecialOffer.css'
export function SpecialOffer() {
  return (
    <section className="special-offer-section">
      {
        offers.map((offer) => (
          <div key={offer.id} className="special-offer-content">
            <div className='offer-img-container'>
              <img src={offer.image} alt="" />
            </div>
            <div className='offer-details'>
              <h2>{offer.title}</h2>
              <p>{offer.discount}</p>
              <button className="shop-offer-button">Order Now</button>
            </div>
          </div>
        ))
      }
    </section>
  )
}