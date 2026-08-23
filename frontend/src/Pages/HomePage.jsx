import bgImg from "../assets/bg-img.jpg";
import icon1 from "../assets/icons8-treadmill-64.png";
import icon2 from "../assets/orange-juice-50.png"
import icon3 from "../assets/list-64.png"
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
                Empower your fitness journey with
                        our gym website's unique feature—tailor and conquer your
                        goals by planning personalized workouts.
              </p>
            </div>
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
          </div>
        </section>
      </div>
    </>
  );
}

export default HomePage;
