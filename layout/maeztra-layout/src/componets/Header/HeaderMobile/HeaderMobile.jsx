import React from "react"
import "./style.css"
import Drawer from "../../icons/Drawer"
import Search from "../../icons/Search"
import Cart from "../../icons/Cart"

export default function HeaderMobile() {
  return (
    <div className="section_headerMain">
      <div className="container_header">
        <div className="menu-logo_header">
          <div className="menu-burguer">
            <Drawer />
          </div>
          <div className="image_container">
            <img src="https://i.ibb.co/StZVfCx/logo-maeztra-novo.png" alt="logo" />
          </div>
        </div>
        <div className="lupa-cart_header">
          <div className="lupa">
            <Search />
          </div>
          <div className="cart">
            <Cart />
          </div>
        </div>
      </div>
    </div>
  )
}