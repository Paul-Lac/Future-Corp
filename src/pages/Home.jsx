import image1 from "../assets/boisson.png";
import image2 from "../assets/nourriture.png";
import image3 from "../assets/feu.png";
import image4 from "../assets/repos.png";
import ButtonNav from "../components/ButtonNav";
import "../components/ButtonNav.css";

function Home() {
  return (
    <div className="home-page">
      <div className="icon-container">
        <ButtonNav
          className="Menu1"
          linkURL="/Needs/0"
          imgSrc={image1}
          altImg="boire"
          title="Trouver à boire"
        />
        <ButtonNav
          className="Menu2"
          linkURL="/Needs/1"
          imgSrc={image2}
          altImg="manger"
          title="Trouver à manger"
        />
        <ButtonNav
          className="Menu3"
          linkURL="/Needs/2"
          imgSrc={image3}
          altImg="Abri"
          title="Trouver un Abri"
        />
        <ButtonNav
          className="Menu4"
          linkURL="/Needs/3"
          imgSrc={image4}
          altImg="repo"
          title="Se divertir"
        />
      </div>
    </div>
  );
}

export default Home;
