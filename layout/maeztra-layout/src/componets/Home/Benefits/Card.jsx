export default function Card({ src, title, subtitle }) {
  return (
    <div className="info">
      <div>
        <img src={src} />
      </div>
      <div className="info-text">
        <span className="title">
          {title}
        </span>
        <span className="subtitle">
          {subtitle}
        </span>
      </div>
    </div >
  )
}