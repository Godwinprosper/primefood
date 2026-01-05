import './About.css'

export function About(){
  return(
    <div className='about-section'>
      <div className="about-content-container">
        <h2>We are Prime</h2>
        <p>
          Welcome to our food store, where we bring you the freshest and most delicious products. Our commitment to quality and taste is reflected in every item we offer.
        </p>
        <p>
            From farm to table, we prioritize sourcing ingredients that are not only flavorful but also sustainably produced. Our diverse selection caters to all tastes and dietary preferences, ensuring that everyone can find something they love.
          </p> 
        <div className='more-about-us'>
          <h2>about our food</h2>
          <p>
            From farm to table, we prioritize sourcing ingredients that are not only flavorful but also sustainably produced. Our diverse selection caters to all tastes and dietary preferences, ensuring that everyone can find something they love.
          </p> 

          <p>
            Experience the difference with our expertly crafted recipes, designed to satisfy your cravings and nourish your body. Join us in celebrating the joy of good food and exceptional service.
          </p>

          <p>
            At our food store, we believe that great food brings people together. Whether you're shopping for everyday essentials or special treats, we're here to make your culinary journey enjoyable and memorable.
          </p>
        </div>
        <button className='learn-more-btn'>Learn More</button>
      </div>
      <div className="about-image-container">
        <img className='about-image' src="full-chiken.png" alt="About Us Food Image" />
      </div>
    </div>
  )
}