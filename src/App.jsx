import { Outlet } from "react-router-dom";
import Footer from "./assets/footer.png"
import Logo from "./assets/Logo.svg";
import "./App.css";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <>
     <NavLink
          to="/">
      <header>
        <img id="logo" src={Logo} alt="Logo" />
        <h1>Future Corp</h1>
      </header>
      </NavLink>
      <Outlet />
      <footer>
        <img src={Footer} alt="ligne" />
      </footer>
    </>
  );
}

export default App;