function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li className="left-buttons">
          <a href="#home">Home</a>
        </li>
        <li className="left-buttons">
          <a href="#about">About Me</a>
        </li>
        <li className="left-buttons">
          <a href="#projects">Projects</a>
        </li>
        <li className="right-buttons">
          <a className="github-button" href="https://github.com/JosephEid">
            {/* <FontAwesomeIcon icon={github} /> */}
            Github
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
