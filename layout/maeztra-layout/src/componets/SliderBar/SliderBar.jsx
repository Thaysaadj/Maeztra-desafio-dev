import styles from "../SliderBar/style.css"

export default function SliderBar() {
  return (
    <div className="container_banner">
      <div className="main_banner">
        <img className="image_banner" src="./static/images/banner.png" alt="banner" />
        <img className="banner-desk" src="./static/images/banner-desk.png" alt="banner" />
        <div className="main_textContainer">
          <h2 className="main_textBanner">
            Promoções de Outono
          </h2>
          <div className="main_paragraphBanner">
            <span className="paragraph_banner">
              confirma os melhores lookspara combinar com você nesse Outono
            </span>
          </div>
          <button className="redirect_textButton">Conferir</button>
        </div>
      </div>

      <div className="seta_banner">
        <img className="banner-mobile" src="./static/images/_icon.png" alt="seta" />
      </div>
      <div className="seta_banner-next">
        <img src="./static/images/_icon-next.png" alt="seta" />
      </div>

      <div className="bulets">
        <div className="bulet-bold">
          <img src="./static/images/bulet.png" alt="bulet" />
        </div>
        <div className="bulet-null-1">
          <img src="./static/images/bulet-null.png" alt="bulet" />
        </div>
        <div className="bulet-null-2">
          <img src="./static/images/bulet-null.png" alt="bulet" />
        </div>
        <div className="bulet-null-3">
          <img src="./static/images/bulet-null.png" alt="bulet" />
        </div>
        <div className="bulet-null-4">
          <img src="./static/images/bulet-null.png" alt="bulet" />
        </div>

      </div>
    </div>
  )

}