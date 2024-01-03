
export default function Card({ src, colors, price, title, descrip, }) {
  return (
    <div className="request-card">
      <div className="request-img">
        <img src={src} />
      </div>
      <div className="request-colors">
        {colors.map(color =>
          <div className="request-color" style={{
            backgroundColor: color
          }}>
          </div>
        )}
      </div>
      <div className="request-info">
        <div className="request-price">{price}</div>
        <div className="request-title">{title}</div>
        <div className="request-description">{descrip}</div>
        <button className="request-button">Adicionar</button>
      </div>
    </div >
  )
}