import React from "react";
import "./style.css"
import Card from "./Card";


export default function Benefits() {
  return (
    <div className="container">
      <div className="carousel">
        <div className="item">
          <Card
            src="/static/images/word.png"
            title="Produtos Importados"
            subtitle="Produtos de Alta Qualidade"
          />
        </div>
        <div className="item">
          <Card
            src="/static/images/house.png"
            title="Estoque no Brazil"
            subtitle="Produtos mais perto de você!"
          />
        </div>
        <div className="item">
          <Card
            src="/static/images/devolut.png"
            title="Trocas Garantidas"
            subtitle="Trocas em até 48 horas, vejas as regras"
          />
        </div>
        <div className="item">
          <Card
            src="/static/images/discount.png"
            title="Ganhe 5% offs"
            subtitle="Pagando à vista no Cartão"
          />
        </div>
        <div className="item">
          <Card
            src="/static/images/shipping.png"
            title="Frete Grátis"
            subtitle="Em compras acima de R$ 499,00"
          />
        </div>
      </div>
    </div>
  )
}