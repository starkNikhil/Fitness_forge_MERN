import AboutUsImage from "../assets/about_us_bg_img.jpg";
import GymImage from "../assets/about_us_gym_img.jpg";

import LiftingImg from "../assets/Power lifting.svg";
function AboutUs() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-text">
          <img src={AboutUsImage} alt="" />
          <p>About Fitness Forge</p>
          <p>Find the healthy way</p>
        </div>
      </section>

      <section className="about-us-section">
        <div className="gym-image">
          <img src={GymImage} alt="gym" />
          <div className="about-us-container">
            <div>
              <div className="redline"></div>
              <p className="heading">OUR GYM</p>
            </div>
            <div>
              <div class="about-text">
                <p>
                  FitnessForge stands as an all-encompassing digital sanctuary
                  dedicated to fostering individual well-being and empowerment.
                  As a user-centric platform, FitnessForge seamlessly integrates
                  personalized workout and diet plans, cutting-edge gym
                  memberships, and an innovative workout tracker. This digital
                  forge empowers users to sculpt their fitness journey, offering
                  tailored solutions that align with their unique health and
                  wellness goals.
                </p>
                <p>
                  With a commitment to transparency and user trust, FitnessForge
                  also provides a wealth of knowledge through regularly updated
                  blogs covering a spectrum of health, fitness, and nutrition
                  topics. Immerse yourself in the FitnessForge community, where
                  every click, workout, and choice is a step towards forging a
                  stronger, healthier, and more resilient version of yourself.
                  Welcome to FitnessForge – where your journey to holistic
                  well-being begins.
                </p>
              </div>
            </div>
            <div className="join-link">
              <p>
                <a href="">Join Our Club</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="exercise-section">
        <div className="card-section">
          <div className="card">
            <div>
              <img
                src={LiftingImg}
                alt="lifting"
                className="exercise-card-img"
              />
              <h5 className="card-heading">Weight Lifting</h5>
              <div className="exercise-text">
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nostrum molestias sapiente, cupiditate quibusdam dolorem nam
                  asperiores aspernatur mollitia harum soluta assumenda quis!
                  Nemo, quasi sint aperiam quia sapiente nostrum porro!
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div>
              <img
                src={LiftingImg}
                alt="lifting"
                className="exercise-card-img"
              />
              <h5 className="card-heading">Weight Lifting</h5>
              <div className="exercise-text">
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nostrum molestias sapiente, cupiditate quibusdam dolorem nam
                  asperiores aspernatur mollitia harum soluta assumenda quis!
                  Nemo, quasi sint aperiam quia sapiente nostrum porro!
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div>
              <img
                src={LiftingImg}
                alt="lifting"
                className="exercise-card-img"
              />
              <h5 className="card-heading">Weight Lifting</h5>
              <div className="exercise-text">
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nostrum molestias sapiente, cupiditate quibusdam dolorem nam
                  asperiores aspernatur mollitia harum soluta assumenda quis!
                  Nemo, quasi sint aperiam quia sapiente nostrum porro!
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div>
              <img
                src={LiftingImg}
                alt="lifting"
                className="exercise-card-img"
              />
              <h5 className="card-heading">Weight Lifting</h5>
              <div className="exercise-text">
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nostrum molestias sapiente, cupiditate quibusdam dolorem nam
                  asperiores aspernatur mollitia harum soluta assumenda quis!
                  Nemo, quasi sint aperiam quia sapiente nostrum porro!
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div>
              <img
                src={LiftingImg}
                alt="lifting"
                className="exercise-card-img"
              />
              <h5 className="card-heading">Weight Lifting</h5>
              <div className="exercise-text">
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nostrum molestias sapiente, cupiditate quibusdam dolorem nam
                  asperiores aspernatur mollitia harum soluta assumenda quis!
                  Nemo, quasi sint aperiam quia sapiente nostrum porro!
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div>
              <img
                src={LiftingImg}
                alt="lifting"
                className="exercise-card-img"
              />
              <h5 className="card-heading">Weight Lifting</h5>
              <div className="exercise-text">
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nostrum molestias sapiente, cupiditate quibusdam dolorem nam
                  asperiores aspernatur mollitia harum soluta assumenda quis!
                  Nemo, quasi sint aperiam quia sapiente nostrum porro!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
