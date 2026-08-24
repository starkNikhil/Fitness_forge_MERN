import bgImg from "../assets/bg-img.jpg";
import icon1 from "../assets/icons8-treadmill-64.png";
import icon2 from "../assets/orange-juice-50.png";
import icon3 from "../assets/list-64.png";
import icon4 from "../assets/dumbell-64.png";
import silver_card from "../assets/dumbbell-solid.svg";
import gold_card from "../assets/medal-solid.svg";
import platinum_card from "../assets/platinum.svg";
import blog_card from "../assets/gym-card.jpg";

import icon5 from "../assets/heartbeat-50.png";
function HomePage() {
  return (
    <>
      <div className="Hero-container">
        <div className="img-container">
          <img src={bgImg} alt="Background-Image" />
        </div>
        <div className="hero-text-container">
          <p>
            <span>Your </span> <span>Fitness </span>
            <span>Your </span> <span>Forge </span>
          </p>
          <p>
            <span>Your </span> <span>Rules </span>
          </p>
        </div>
      </div>
      <div className="Box">
        <section className="sm-intro">
          <div className="text-center">
            <span className="text-orange">WHY CHOOSE US ?</span>
          </div>
          <div className="container">
            <div className="container-sm">
              <div className="icon-box">
                <img className="icon1" src={icon1} alt="treadmillLogo" />
              </div>
              <p className="icon-heading"> Best Equipments</p>
              <p className="container-text">
                {" "}
                Explore our gym's top-tier equipment, meticulously chosen for
                optimal results, showcased on our website for a glimpse into
                excellence.
              </p>
            </div>
            <div className="container-sm">
              <div className="icon-box">
                <img className="icon1" src={icon2} alt="list64" />
                <img className="icon1" src={icon3} alt="orange-juice" />
              </div>
              <p className="icon-heading"> Plan your own workout</p>
              <p className="container-text">
                {" "}
                Empower your fitness journey with our gym website's unique
                feature—tailor and conquer your goals by planning personalized
                workouts.
              </p>
            </div>
            <div className="container-sm">
              <div className="icon-box">
                <img className="icon1" src={icon4} alt="dumbbell-64" />
              </div>
              <p className="icon-heading"> Professional Workout</p>
              <p className="container-text">
                Elevate your fitness journey with our gym, offering expertly
                crafted professional workout plans for unparalleled results.
              </p>
            </div>
            <div className="container-sm">
              <div className="icon-box">
                <img className="icon1" src={icon5} alt="heartbeat-50" />
              </div>
              <p className="icon-heading"> Track your progress</p>
              <p className="container-text">
                Elevate your fitness journey with our gym website feature,
                empowering you to effortlessly track and record workout
                progress.
              </p>
            </div>
          </div>
        </section>
        <section className="classes">
          <div className="text-center">
            <p className="text-orange heading">Our Plans</p>
          </div>
          <div className="text-center">
            <p className="sub-heading">Choose your pricing plan</p>
          </div>

          <div className="card-container">
            <div className="membership-card silver">
              <div className="card">
                <div className="membership-title">
                  <img src={silver_card} alt="silver" className="card-icon " />
                  <h3>silver</h3>
                </div>
                <div className="membership-perks">
                  <p>
                    <span className="Price-style"> 35</span>
                    <span className="euro-style">$/month</span>
                  </p>
                  <p>Gain access to the gym room</p>
                  <p>Group Fitness Classes</p>
                </div>
                <input type="hidden" name="plan" value="Silver" />
                <input type="hidden" name="amount" value="3500" />
                <button
                  id="rzp-btn"
                  className="get-started-btn membership-btn"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </div>

            <div className="membership-card gold">
              <div className="card">
                <div className="membership-title">
                  <img src={gold_card} alt="gold" className="card-icon " />
                  <h3>Gold</h3>
                </div>
                <div className="membership-perks">
                  <p>
                    <span className="Price-style">95</span>
                    <span className="euro-style">$/month</span>
                  </p>
                  <p>Gain access to the gym room</p>
                  <p>Group Fitness Classes</p>
                  <p>Access to Sauna and Courts</p>
                </div>
                <input type="hidden" name="plan" value="Gold" />
                <input type="hidden" name="amount" value="9500" />
                <button
                  id="rzp-btn"
                  className="get-started-btn membership-btn"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </div>
            <div className="membership-card platinum">
              <div className="card">
                <div className="membership-title">
                  <img
                    src={platinum_card}
                    alt="platinum"
                    className="card-icon "
                  />
                  <h3>Platinum</h3>
                </div>
                <div className="membership-perks">
                  <p>
                    <span className="Price-style">195</span>
                    <span className="euro-style">$/month</span>
                  </p>
                  <p>Access to everything we offer!</p>
                </div>
                <input type="hidden" name="plan" value="Platinum" />
                <input type="hidden" name="amount" value="19500" />
                <button
                  id="rzp-btn"
                  className="get-started-btn membership-btn"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="blog-cards-section" id="blogs">
          <div className="text-center bg-orange">
            <h3 className="text-red"> Our Blogs</h3>
            <p className="blog-sub-heading">Latest Blog Feed</p>
            <div className="blog-container">
              <div className="blog-card">
                <div className="card-banner image-holder">
                  <img
                    src={blog_card}
                    alt="gym-card"
                    className="img-cover w-64"
                    loading="lazy"
                  />
                  <time datetime="load from backend" className="card-meta">
                    7 july 2022
                  </time>
                </div>
                <div className="card-content">
                  <h3 className="h3">
                    <a href="" className="card-title">
                      Going to gym for th first time
                    </a>
                  </h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas cum hic fugiat eos harum voluptatibus.
                  </p>
                  <a href="" className="btn-link has-before">
                    READ MORE
                  </a>
                </div>
              </div>
              <div className="blog-card">
                <div className="card-banner image-holder">
                  <img
                    src={blog_card}
                    alt="gym-card"
                    className="img-cover w-64"
                    loading="lazy"
                  />
                  <time datetime="load from backend" className="card-meta">
                    7 july 2022
                  </time>
                </div>
                <div className="card-content">
                  <h3 className="h3">
                    <a href="" className="card-title">
                      Going to gym for th first time
                    </a>
                  </h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas cum hic fugiat eos harum voluptatibus.
                  </p>
                  <a href="" className="btn-link has-before">
                    READ MORE
                  </a>
                </div>
              </div>
              <div className="blog-card">
                <div className="card-banner image-holder">
                  <img
                    src={blog_card}
                    alt="gym-card"
                    className="img-cover w-64"
                    loading="lazy"
                  />
                  <time datetime="load from backend" className="card-meta">
                    7 july 2022
                  </time>
                </div>
                <div className="card-content">
                  <h3 className="h3">
                    <a href="" className="card-title">
                      Going to gym for th first time
                    </a>
                  </h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas cum hic fugiat eos harum voluptatibus.
                  </p>
                  <a href="" className="btn-link has-before">
                    READ MORE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HomePage;
