import "./style.css"
export default function PreFooter() {
  return (
    <div className="preFooter-container">
      <div className="preFooter-section">
        <div className="preFooter-info">
          <p className="preFooter-text">
            Informações
          </p>
          <div className="preFooter-icon">
            <img src="../../../../static/images/_+.svg" alt="" />
          </div>
        </div>
        <div className="preFooter-info">
          <p className="preFooter-text">
            Minha Conta
          </p>
          <div className="preFooter-icon">
            <img src="../../../../static/images/_+.svg" alt="" />
          </div>
        </div>
        <div className="preFooter-info">
          <p className="preFooter-text">
            Onde nos Encontrar
          </p>
          <div className="preFooter-icon">
            <img src="../../../../static/images/_+.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}