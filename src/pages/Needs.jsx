import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import CarouselComponent from "./../components/CarouselComponent.jsx";

import "./Needs.css";

function Needs() {
  const { id } = useLoaderData();

  const [carouselData, setCarouselData] = useState([]);
  const [objective, setObjective] = useState("");
  const [solution, setSolution] = useState([]);
  const [buttonVisible, setButtonVisible] = useState(false);
  const [isModalClosed, setIsModalClosed] = useState(true);

  useEffect(() => {
    fetch("https://paul-lac.github.io/Future-Corp_API/needs.json")
      .then((res) => res.json())
      .then((data) => {
        setCarouselData(data[id].instructions);
        setObjective(data[id].objective);
        setSolution(data[id].solution);
      });
  }, []);

  setTimeout(() => {
    setButtonVisible(true);
  }, 5000);

  const handleBtnCLick = () => {
    setIsModalClosed(false);
  };

  const handleCloseModal = () => {
    setIsModalClosed(true);
  };

  return (
    <>
      <section id="needs">
        <div
          className={`needs-overlay ${isModalClosed ? "modal-closed" : ""}`}
          onClick={handleCloseModal}
        />
        <div className={`card-modal ${isModalClosed ? "modal-closed" : ""}`}>
          {solution.map((elem) => {
            {
              console.info(elem.titleSolution);
            }
            return (
              <>
                <h2>{elem.titleSolution}</h2>
                <img
                  src={`https://paul-lac.github.io/Future-Corp_API${elem.imageSolution}`}
                  alt=""
                />
              </>
            );
          })}
        </div>

        <CarouselComponent carouselData={carouselData} objective={objective} />
        <button
          className={`btn-modal ${buttonVisible ? "btn-modal-visible" : ""}`}
          onClick={handleBtnCLick}
        >
          Retour vers le passé
        </button>
      </section>
    </>
  );
}

export default Needs;
