import React from "react";
import Card from "./Card";
import  "./style.css"

export default function PartnerBrands() {
  return (
    <div className="container">
      <div className="carousel-brands">
        <div className="item-brands">
          <Card
            src="../../../../static/images/comma.png"
          />
        </div>
        <div className="item-brands">
          <Card
            src="../../../../static/images/melissa.png"

          />
        </div>
        <div className="item-brands">
          <Card
            src="../../../../static/images/forever.png"
            
          />
        </div>
        <div className="item-brands">
          <Card
            src="../../../../static/images/zara.png"
         
          />
        </div>
        <div className="item-brands">
          <Card
            src="../../../../static/images/taylor.png"
            
          />
        </div>
      </div>
    </div>
  )
}