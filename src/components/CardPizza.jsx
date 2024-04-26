import { useContext } from "react"
import { PizzasContext } from "../context/PizzasContext"

import ButtonCTA from "./ButtonCTA"

import pizzaImg from "../assets/img/pizza.png"

const CardPizza = () => {

  const { pizzas, botones, handleVerPizzaSelected, handleAgregarPizzaSelected } = useContext(PizzasContext)

  return (
    <div className="row card-pizza-container">
      {pizzas && pizzas.map(pizza => (
        <div key={pizza.id + pizza.name} className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center my-2">
          <div className="card" style={{ width: '18rem' }}>
            <img src={pizza.img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title fw-semibold">{pizza.name.toUpperCase()}</h5>
              <p className="card-text mb-2 fw-semibold">Ingredients:</p>
              <ul>
                {pizza.ingredients.map(ingredient => (
                  <li key={pizza.id + ingredient + pizza.price}><img src={pizzaImg} style={{ width: '1em' }} /> {ingredient}</li>
                ))}
              </ul>
              <p className="text-center fs-5 fw-semibold">$ {pizza.price}</p>
              <div className="botones-container d-flex justify-content-evenly">
                <ButtonCTA clases={botones.ver.color} texto={botones.ver.text} icono={botones.ver.icono} value={pizza.id} onClickFunction={() => handleVerPizzaSelected(pizza.id)} />
                <ButtonCTA clases={botones.vender.color} texto={botones.vender.text} icono={botones.vender.icono} value={pizza.id} onClickFunction={() => handleAgregarPizzaSelected(pizza.id)} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardPizza