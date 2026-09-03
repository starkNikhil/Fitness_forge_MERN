// import bgImg from "../assets/bg-img.jpg";
import icon1 from "../assets/icons8-treadmill-64.png";
import icon2 from "../assets/orange-juice-50.png";

import icon4 from "../assets/dumbell-64.png";
import silver_card from "../assets/dumbbell-solid.svg";
import gold_card from "../assets/medal-solid.svg";
import platinum_card from "../assets/platinum.svg";
import blog_card from "../assets/gym-card.jpg";

import icon5 from "../assets/heartbeat-50.png";
function HomePage() {
  return (
    <>
      <div className=" w-full bg-[url(/bg-img.jpg)] bg-cover bg-center bg-no-repeat flex items-center justify-center pt-16">
        <div className="hero-text-container flex flex-col text-[60px] mt-[100px] w-full text-white">
          <p>
            <span>Your </span> <span className="text-[#ed7d2d]">Fitness </span>
            <span className="text-[#A7ADB7]">Your </span>{" "}
            <span className="text-[#ed7d2d]">Forge </span>
          </p>
          <p>
            <span>Your </span> <span className="text-[#ed7d2d]">Rules </span>
          </p>
        </div>
      </div>
      <div className="Box bg-[#1d2128]">
        <section className="sm-intro pb-[20px]">
          <div className="flex items-center justify-center pt-[20px] ">
            <span className="text-[#ed7d2d] w-[150px] flex justify-center">
              WHY CHOOSE US ?
            </span>
          </div>
          <div className=" flex relative  justify-evenly w-full mt-[20px]">
            <div className="container-sm flex items-center flex-col">
              <div className="icon-box relative w-[100px] h-[100px] bg-[#46505a] rounded-[50%] mb-[15px] mt-2">
                <img
                  className="icon1 relative top-4 left-4"
                  src={icon1}
                  alt="treadmillLogo"
                />
              </div>
              <p className="icon-heading mx-[20px] text-center">
                Best Equipments
              </p>
              <p className="container-text py-[15px] text-center text-[#a7adb7]">
                Explore our gym's top-tier equipment, meticulously chosen for
                optimal results, showcased on our website for a glimpse into
                excellence.
              </p>
            </div>
            <div className="container-sm flex items-center flex-col">
              <div className="icon-box relative w-[100px] h-[100px] bg-[#46505a] rounded-[50%] mb-[15px] mt-2">
                <img
                  className="icon1 absolute top-[22px] left-[24px]"
                  src={icon2}
                  alt="list64"
                />
              </div>
              <p className="icon-heading mx-[20px] text-center">
                Plan your own workout
              </p>
              <p className="container-text py-[15px] text-center text-[#a7adb7]">
                Empower your fitness journey with our gym website's unique
                feature—tailor and conquer your goals by planning personalized
                workouts.
              </p>
            </div>
            <div className="container-sm flex items-center flex-col">
              <div className="icon-box relative w-[100px] h-[100px] bg-[#46505a] rounded-[50%] mb-[15px] mt-2">
                <img
                  className="icon1 relative top-4 left-4"
                  src={icon4}
                  alt="dumbbell-64"
                />
              </div>
              <p className="icon-heading mx-[20px] text-center">
                {" "}
                Professional Workout
              </p>
              <p className="container-text py-[15px] text-center text-[#a7adb7]">
                Elevate your fitness journey with our gym, offering expertly
                crafted professional workout plans for unparalleled results.
              </p>
            </div>
            <div className="container-sm flex items-center flex-col">
              <div className="icon-box relative w-[100px] h-[100px] bg-[#46505a] rounded-[50%] mb-[15px] mt-2">
                <img
                  className="icon4 relative top-[26px] left-[24px]"
                  src={icon5}
                  alt="heartbeat-50"
                />
              </div>
              <p className="icon-heading mx-[20px] text-center">
                {" "}
                Track your progress
              </p>
              <p className="container-text py-[15px] text-center text-[#a7adb7]">
                Elevate your fitness journey with our gym website feature,
                empowering you to effortlessly track and record workout
                progress.
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className="classes bg-[#292e37] text-center w-full">
        <div className="text-center flex relative justify-center top-7">
          <p className="text-[#ed7d2d] mb-[15px] text-[32px] heading">
            Our Plans
          </p>
        </div>
        <div className="text-center flex relative justify-center top-7">
          <p className="sub-heading text-xl text-[#ed7d2d]">
            Choose your pricing plan
          </p>
        </div>

        <div className="card-container flex items-center mt-24 justify-center">
          <div className="membership-card silver mt-[15px] p-[16px] border-white border-solid border-[3px] bg-gradient-to-r from-[#f9032f] to-[#000] rounded-[16px] flex flex-col justify-between items-center my-[14px] cursor-pointer">
            <div className="card">
              <div className="membership-title text-center relative">
                <img src={silver_card} alt="silver" className="card-icon mb-[20px] w-[80px]" />
                <h3 className="text-[clamp(16px,5vw,32px)] mb-[24px]">silver</h3>
              </div>
              <div className="membership-perks mb-4 min-h-[150px]">
                <p className="mb-[16px] text-[17px]">
                  <span className="Price-style text-[48px] mr-[5px] font-bold"> 35</span>
                  <span className="euro-style text-[20px]">$/month</span>
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

          <div className="membership-card gold mt-[24px] relative p-[16px] border-white border-solid border-[3px] bg-gradient-to-r from-[#f9032f] to-[#000] rounded-[16px] flex flex-col justify-between items-center my-[14px] cursor-pointer">
            <div className="card">
              <div className="membership-title text-center relative">
                <img src={gold_card} alt="gold" className="card-icon mb-[20px] w-[80px]" />
                <h3 className="text-[clamp(16px,5vw,32px)] mb-[24px]">Gold</h3>
              </div>
              <div className="membership-perks mb-4 min-h-[150px]">
                <p className="mb-[16px] text-[17px]">
                  <span className="Price-style text-[48px] mr-[5px] font-bold">95</span>
                  <span className="euro-style text-[20px]">$/month</span>
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
          <div className="membership-card platinum mt-[50px] h-[440px] p-[16px] border-white border-solid border-[3px] bg-gradient-to-r from-[#f9032f] to-[#000] rounded-[16px] flex flex-col justify-between items-center my-[14px] cursor-pointer">
            <div className="card">
              <div className="membership-title text-center relative">
                <img
                  src={platinum_card}
                  alt="platinum"
                  className="card-icon mb-[20px] w-[80px]"
                />
                <h3 className="text-[clamp(16px,5vw,32px)] mb-[24px]">Platinum</h3>
              </div>
              <div className="membership-perks mb-4 min-h-[150px]">
                <p className="mb-[16px] text-[17px]">
                  <span className="Price-style text-[48px] mr-[5px] font-bold">195</span>
                  <span className="euro-style text-[20px]">$/month</span>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  cum hic fugiat eos harum voluptatibus.
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  cum hic fugiat eos harum voluptatibus.
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  cum hic fugiat eos harum voluptatibus.
                </p>
                <a href="" className="btn-link has-before">
                  READ MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
