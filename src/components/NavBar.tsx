const NavBar = () => {
  return (
    <nav id="navbar">
      <a href="#section_1" className="navbar_link section_1">
        <span className="navbar_link_name">Home</span>
        <i className="fa-solid fa-house"></i>
      </a>
      <a href="#section_2" className="navbar_link section_2">
        <span className="navbar_link_name">About</span>
        <i className="fa-solid fa-book"></i>
      </a>
      <a href="#section_3" className="navbar_link section_3">
        <span className="navbar_link_name">Settings</span>
        <i className="fa-solid fa-gear"></i>
      </a>
      <a href="#section_4" className="navbar_link section_4">
        <span className="navbar_link_name">Contact</span>
        <i className="fa-solid fa-phone"></i>
      </a>
      <a href="#section_5" className="navbar_link section_5">
        <span className="navbar_link_name">Research</span>
        <i className="fa-solid fa-magnifying-glass"></i>
      </a>
    </nav>
  );
};

export default NavBar;
