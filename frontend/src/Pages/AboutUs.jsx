import AboutUsImage from "../assets/about_us_bg_img.jpg"
import GymImage from "../assets/about_us_gym_img.jpg"
function AboutUs(){
    return <>
    <section className="hero-section">
        <div className="hero-text">
            <img src={AboutUsImage} alt="" />
            <p>About Fitness Forge</p>
            <p>Find the healthy way</p>
        </div>
    </section>

    <section className="about-us-section">
        <div className="gym-image">
        </div>
    </section>
    </>


}


export default AboutUs;