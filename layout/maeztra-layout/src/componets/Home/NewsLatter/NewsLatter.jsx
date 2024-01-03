import "./style.css"

export default function NewsLatter() {
  return (
    <div className="news-container">
      <div className="news-info">
        <p>Receba Nossa Newslatter</p>
        <div className="news-input">
          <input className="input-email" type="email" value="Digite seu e-mail" />
          <input className="input-submit" type="submit" value="Enviar" />
        </div>
      </div>
    </div>
  )
}