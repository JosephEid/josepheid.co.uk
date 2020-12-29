import "./Header.css";
import SpaceInvaders from '../SpaceInvaders/SpaceInvaders';
import NavBar from "../NavBar/NavBar";

function Header() {
  return (
    <header id="home">
      <NavBar />
      <div className="content">
        <SpaceInvaders />
      </div>
    </header>
  );
}

export default Header;
