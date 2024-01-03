import { useEffect, useState } from "react";
import "./style.css";

export default function PopUp() {
  const [isPopUpOpen, setIsPopUpOpen] = useState(true);
  
  const closePopUp = () => {
    setIsPopUpOpen(false);
  };

  useEffect(() => {
    if(!isPopUpOpen) {
      const popupElement = document.querySelector(".container-popUp")
      if(popupElement) {
        popupElement.remove()
      }
    }
   
  }, [isPopUpOpen]);

  return (
    <div className={`container-popUp ${isPopUpOpen ? "open" : "closed"}`}>
      <section className="section-popUp">
        <p className="button-close" onClick={closePopUp}>FECHAR</p>
        <section className="img-popUp">
          <img src="./static/images/popup-desk.png" alt="" />
        </section>
        <section className="info-popUp">
          <img
            className="envelope-popUp"
            src="./static/images/envelope-pop.svg"
            alt=""
          />
          <p className="title-popUp">BEM VINDO À MAEZTRA</p>
          <p className="description-popUp">Receba em Primeira mão</p>
          <p className="subDescription-popUp">desconto e ofertas exclusivas</p>

          <container className="button-popUp">
            <input
              className="inputButton-popUp"
              type="text"
              placeholder="Digite seu e-mail"
            />
            <button className="buttonSubmit-popUp" onClick={closePopUp}>
              Enviar <img src="./static/images/aviao.svg" alt="" />
            </button>
          </container>
        </section>
      </section>
    </div>
  );
}
