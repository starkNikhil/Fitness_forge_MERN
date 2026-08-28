import logo from "../assets/logo-img.png";

function NavBar() {
  return (
    <nav className="navbar flex justify-between items-center fixed w-full bg-[#1d2128] opacity-60 text-white">
      <div className="logo-section flex items-center">
        <a href="/">
          <img src={logo} alt="Fitness-Forge" className="logo-image w-[85px] h-[68px]"/>
        </a>
        <a href="" className=" mb-3">
          <span className="mr-2">Fitness</span>
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
