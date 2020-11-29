import "./Header.css";

function Header() {
  return (
    <header id="home">
      <nav className="navbar">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#about">About Me</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
