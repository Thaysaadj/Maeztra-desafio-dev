import React, { useState } from "react";
import Card from "./Card";
import "./style.css";

export default function MostRequested() {
  return (
    <div className="container">
      <div className="carousel-most">
        <div className="item-most">
          <Card
            src="../../../../static/images/porducts/product1/foto1.png"
            colors={["#DEAC71", "#D37164", "#6497D3", "#3C3B79"]}
            price="R$ 500,00"
            title="Faux Suede Mini Skirt"
            descrip="A faux suede mini skirt featuring exposed button-front closures and panel seam construction."
          />
          <Card
            src="../../../../static/images/porducts/product2/foto2.png"
            colors={["#1C1A19", "#D84E4B", "#CFC9B0", "#EAE9E5"]}
            price="R$ 320,00"
            title="Ruched Rose Print Mini Skirt"
            descrip="A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem."
          />
          <Card
            src="../../../../static/images/porducts/product1/foto1.png"
            colors={["#DEAC71", "#D37164", "#6497D3", "#3C3B79"]}
            price="R$ 500,00"
            title="Faux Suede Mini Skirt"
            descrip="A faux suede mini skirt featuring exposed button-front closures and panel seam construction."
          />
          <Card
            src="../../../../static/images/porducts/product2/foto2.png"
            colors={["#1C1A19", "#D84E4B", "#CFC9B0", "#EAE9E5"]}
            price="R$ 320,00"
            title="Ruched Rose Print Mini Skirt"
            descrip="A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem."
          />
          <Card
            src="../../../../static/images/porducts/product1/foto1.png"
            colors={["#DEAC71", "#D37164", "#6497D3", "#3C3B79"]}
            price="R$ 500,00"
            title="Faux Suede Mini Skirt"
            descrip="A faux suede mini skirt featuring exposed button-front closures and panel seam construction."
          />
        </div>
      </div>
    </div>
  );
}
