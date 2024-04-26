import { useContext } from "react"
import { PizzasContext } from "../context/PizzasContext";

import pizzaImg from "../assets/img/pizza.png"
import ButtonCTA from "./ButtonCTA";

const CardDetailsPizza = () => {

  const { pizzaSelected, botones, handleAgregarPizzaSelected } = useContext(PizzasContext)

  return (
    <div className="card-details-pizza-container d-flex justify-content-center">
      <div className="card mb-0" style={{ maxWidth: '60em' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={pizzaSelected && pizzaSelected.img} className="img-fluid rounded-start" alt={`Imagen pizza ${pizzaSelected.name}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div className="col-md-8">
            <div className="card-body py-0 m-2">
              <h5 className="card-title fw-semibold">{pizzaSelected && pizzaSelected.name.toUpperCase()}</h5>
              <p className="card-text">{pizzaSelected && pizzaSelected.desc}</p>
              <p className="card-text mb-2 fw-semibold">Ingredients:</p>
              <ul>
                {pizzaSelected && pizzaSelected.ingredients.map((ingredient, index) => (
                  <li key={pizzaSelected.id + index}><img src={pizzaImg} style={{ width: '1em' }} /> {ingredient}</li>
                ))}
              </ul>
              <div className="card-details-priceCTA-container d-flex flex-column align-items-center justify-content-between gap-2">
                <p className="mb-0 fs-5 fw-semibold">Precio: $ {pizzaSelected && pizzaSelected.price}</p>
                <ButtonCTA clases={botones.vender.color} texto={botones.vender.text} icono={botones.vender.icono} value={pizzaSelected.id} onClickFunction={() => handleAgregarPizzaSelected(pizzaSelected.id)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardDetailsPizza