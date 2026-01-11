import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import './AboutPage.css'
import imageGroup from "../../public/images/aboutPageImages/group.webp"
import vegetables from "../assets/images/icons/vegetables.png"
import customer from "../assets/images/icons/customerservice.png"
import cleenkichen from "../assets/images/icons/kitchen.png"
import onlineorder from "../assets/images/icons/onlineorder.png"
import profilePic from "../assets/profile-pics.png"


export function AboutPage() {
  return (
    <>
      <Header />
      <div className="aboutpage-section">
        <section className="aboutpage-hero">
          <h1>About Us</h1>
        </section>
        <section className="whyUs">
          <div className="whyUs-detail">
            <div className="whyUs-sub-ctn whyus-left-container">
              <div className="whyus-img-container">
                <img src={imageGroup} alt="" />
              </div>
            </div>
            <div className="whyUs-sub-ctn ">
              <div className="whyus-right-container">
                <h6>WHY CHOOSE US</h6>
                <h3>Why we are the best</h3>
                <div className="text-ctn">
                  <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout, the point of using more-or-less normal.
                  </p>
                </div>
                <div className="why-us-content">
                  <div className="why-us-card">
                    <div className="card-img-ctn">
                      <img src={vegetables} alt="" />
                    </div>
                    <div><span>Fresh Food</span></div>
                  </div>
                  <div className="why-us-card">
                    <div className="card-img-ctn">
                      <img src={cleenkichen} alt="" />
                    </div>
                    <div><span>Cleen Kichen</span></div>
                  </div>
                  <div className="why-us-card">
                    <div className="card-img-ctn">
                      <img src={customer} alt="" />
                    </div>
                    <div><span>24/7 Services</span></div>
                  </div>
                  <div className="why-us-card">
                    <div className="card-img-ctn">
                      <img src={onlineorder} alt="" />
                    </div>
                    <div><span>Clean Kitchen</span></div>
                  </div>
                </div>
                <div className="founder-container">
                  <div className="founder-img-ctn">
                    <img src={profilePic} alt="funder image" />
                  </div>
                  <div >
                    <p className="funder-name"><strong>Prosper</strong></p>
                    <p>Founder of PrimeHeaven</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}