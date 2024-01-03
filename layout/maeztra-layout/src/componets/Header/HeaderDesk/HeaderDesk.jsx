import React from "react"
import "./style.css"
import MenuDesk from "./MenuDesk"

export default function HeaderDesk() {
  return (
    <>
      <header className="section-header-desk">
        <div className="container-header-desk">
          <div className="menu-logo_headerDesk">
            <div className="image_containerDesk">
              <img src="https://i.ibb.co/StZVfCx/logo-maeztra-novo.png" alt="Logo" />
            </div>
            <div className="lupa">
              <input className="input-text" type="email" placeholder="O Que Você Busca?" />
              <input className="input-buscar" type="submit" value="Buscar" />
            </div>
            <div className="container-icons-desk">
              <div className="login-desk">
                <img src="../../../static/images/login.png" alt="" />
              </div>
              <div className="favorit-icon">
                <img src="../../../static/images/favorit.png" alt="" />
              </div>
              <div className="cart-desk">
                <img src="../../../static/images/cart-desk.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <MenuDesk />
    </>

  )
}