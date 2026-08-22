import logo from "../assets/logo-img.png";

function NavBar() {
  return (
    <nav className="navbar flex justify-between ">
      <div className="logo-section flex">
        <a href="/">
          <img src={logo} alt="Fitness-Forge" className="logo-image w-24"/>
        </a>
        <a href="">
          <span>Fitness</span>
          <span>Forge</span>
        </a>
      </div>
      <div className="navbar-toggle" id="mobile-menu">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className="navbar-menu navbar-animate flex justify-around
       w-96">
        <a href="" className="navbar-link">Home</a>
        <a href="" className="navbar-link">About Us</a>
        <a href="" className="navbar-link">Blogs</a>
      </div>
    </nav>
  );
}

export default NavBar;
