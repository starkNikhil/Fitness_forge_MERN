import silverClassImage from "../assets/silver-class-img.jpeg";
import GoldClassImage from "../assets/gold-class-img.jpeg";
import PlatinumClassImage from "../assets/Platinum-class-img.jpeg";
import BgImageForClasses from "../assets/Class-page-main-img.jpeg";
function Classes() {
  return (
    <>
      <section className="hero section">
        <img src={BgImageForClasses} />
        <div className="hero-text">
          <h2>Our Classes</h2>
        </div>
      </section>
      <section className="about-us-section">
        <img src={silverClassImage} alt="silver-class-img" />
        <div className="about-us-container">
          <div>
            <div className="redline"></div>
            <p className="heading">Silver Classes</p>
          </div>
          <div>
            <div class="about-text">
              <div className="about-class">
                <h3 className="class-heading">Description:</h3>
                <p>
                  The Silver Class is designed for individuals who are looking
                  to kickstart their fitness journey. It provides essential
                  features to help you build a strong foundation for a healthier
                  lifestyle.
                </p>
              </div>
              <h3 className="sub-heading">Features:</h3>
              <ul class="features">
                <li>Access to the gym during standard hours.</li>
                <li>Standard workout plans tailored for beginners.</li>
                <li>Limited access to premium amenities.</li>
              </ul>
              <div class="additional-details">
                <h3 class="sub-heading">Additional Details:</h3>
                <p>
                  Ideal for beginners and those with a moderate fitness level.
                  Upgrade options available for more personalized plans.
                </p>
              </div>
            </div>
          </div>
          <div className="join-link">
            <p>
              <a href="">Join for $ 35 per month</a>
            </p>
          </div>
        </div>
      </section>
      <section className="about-us-section">
        <img src={GoldClassImage} alt="gold-class-img" />
        <div className="about-us-container">
          <div>
            <div className="redline"></div>
            <p className="heading">Gold Classes</p>
          </div>
          <div>
            <div class="about-text">
              <div className="about-class">
                <h3 className="class-heading">Description:</h3>
                <p>
                  The Gold Class is designed for individuals seeking a more
                  comprehensive fitness experience. It offers enhanced features
                  to take your fitness routine to the next level.
                </p>
              </div>
              <h3 className="sub-heading">Features:</h3>
              <ul class="features">
                <li>Extended gym access, including peak hours.</li>
                <li>Customized workout plans based on individual goals.</li>
                <li>Access to selected premium amenities.</li>
              </ul>
              <div class="additional-details">
                <h3 class="sub-heading">Additional Details:</h3>
                <p>
                  Suited for intermediate to advanced fitness enthusiasts.
                  Personalized attention with more advanced workout options.
                </p>
              </div>
            </div>
          </div>
          <div className="join-link">
            <p>
              <a href="">Join for $ 95 per month</a>
            </p>
          </div>
        </div>
      </section>
      <section className="about-us-section">
        <img src={PlatinumClassImage} alt="platinum-class-img" />
        <div className="about-us-container">
          <div>
            <div className="redline"></div>
            <p className="heading">Platinum Classes</p>
          </div>
          <div>
            <div class="about-text">
              <div className="about-class">
                <h3 className="class-heading">Description:</h3>
                <p>
                  The Platinum Class represents the pinnacle of our fitness
                  offerings. It caters to individuals who demand the highest
                  level of personalized attention and premium amenities.
                </p>
              </div>
              <h3 className="sub-heading">Features:</h3>
              <ul class="features">
                <li>Unlimited access to the gym at any time.</li>
                <li>
                  Highly personalized workout plans tailored to specific goals.
                </li>
                <li>
                  Full access to all premium amenities, including personal
                  training sessions.
                </li>
              </ul>
              <div class="additional-details">
                <h3 class="sub-heading">Additional Details:</h3>
                <p>
                  Tailored for advanced fitness enthusiasts and those with
                  specific fitness goals. Provides the most comprehensive and
                  personalized fitness experience.
                </p>
              </div>
            </div>
          </div>
          <div className="join-link">
            <p>
              <a href="">Join for $ 195 per month</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Classes;
