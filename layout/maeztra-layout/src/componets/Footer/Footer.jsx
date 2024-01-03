import "./style.css"


export default function Footer() {
  return (
    <div className="footer-container">
      <div className="container-media">
        <div className="icon-media-facebook">
          <img src="../../../static/images/facebook.png" alt="" />
        </div>
        <div className="icon-media-linkedin">
          <img src="../../../static/images/linkedin.png" alt="" />
        </div>
        <div className="icon-media-instagram">
          <img src="../../../static/images/instagram.png" alt="" />
        </div>
        <div className="icon-media-youtube">
          <img src="../../../static/images/youtube.png" alt="" />
        </div>
      </div>
      <div className="container-cash">
        <div className="icon-cash-visa1">
          <img src="../../../static/images/visa.png" alt="" />
        </div>
        <div className="icon-cash-master1">
          <img src="../../../static/images/mastercard.png" alt="" />
        </div>
        <div className="icon-cash-visa2">
          <img src="../../../static/images/visa.png" alt="" />
        </div>
        <div className="icon-cash-master2">
          <img src="../../../static/images/mastercard.png" alt="" />
        </div>
      </div>
      <div className="container-logos">
        <div className="icon-vtex">
          <img src="../../../static/images/logo-vtex.png" alt="" />
        </div>
        <div className="icon-maeztra">
          <img src="../../../static/images/logo-maeztra.png" alt="" />
        </div>
      </div>
    </div>
  )
}