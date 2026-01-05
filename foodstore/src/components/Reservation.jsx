import './Reservation.css'

export function Reservation() {

  return (
    <>
      <div className='reservation-title'>Book a Table</div>
      <div className='reservation-container'>
        <form className='reservation-form'>
          <input className='form-input' type="text" placeholder='Name' required />
          <input className='form-input' type="email" placeholder='Email' required />
          <input className='form-input' type="tel" placeholder='Phone' required />
          <div className='reservation-time-date'>
            <input className='form-input' type="date" required />

            <select className='form-input'  placeholder="Select Time">
              <option value="1">9:00am</option>
              <option value="2">10:00am</option>
              <option value="3">11:00am</option>
              <option value="4">12:00pm</option>
              <option value="5">1:00pm</option>
              <option value="6">2:00pm</option>
              <option value="7">3:00pm</option>
              <option value="8">4:00pm</option>
            </select>
          </div>

          <select className='form-input' placeholder="How Many persons">
            <option value="1">Table for 1</option>
            <option value="2">Table for 2</option>
            <option value="3">Table for 3</option>
            <option value="4">Table for 4</option>
          </select>
          <div className='submit-button-container'>
            <button type="submit" className='submit-reservation'>Reserve Now</button>
          </div>
        </form>
        <div className='reservation-image-container'>
          <img className='reservation-image' src="table.png" alt="" />
        </div>
      </div>
    </>
  )
}