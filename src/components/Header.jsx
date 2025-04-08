import "./Header.css";
import { Link as RouterLink } from "react-router-dom";

function Header({ logo }) {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>My Portfolio</h1>
      <nav>
        <RouterLink to="/search" className="App-link">
          Search
        </RouterLink>
        |&nbsp;
        <RouterLink to="/" className="App-link">
          About me
        </RouterLink>
        |&nbsp;
        <RouterLink to="/projects" className="App-link">
          Projects
        </RouterLink>
      </nav>
    </header>
  );
}

export default Header;
