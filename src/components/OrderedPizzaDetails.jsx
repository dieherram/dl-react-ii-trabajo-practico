import { useContext } from "react";
import { PizzasContext } from "../context/PizzasContext";

const OrderedPizzaDetails = () => {
  const { cart, addPizzaButton, subtractPizzaButton, total, pagarFunction } =
    useContext(PizzasContext);

  return (
    <div className="ordered-pizza-details-container my-2">
      <div className="card">
        <ul className="list-group list-group-flush">
          {cart &&
            cart.map((cart, index) => (
              <li key={cart.name + index} className="list-group-item d-flex align-items-center justify-content-between flex-wrap">
                <div className="pizza-ordered-details-container d-flex gap-3 align-items-center">
                  <img src={cart.img} alt={`imagen pizza ${cart.name}`} />
                  <span>{cart.name.toUpperCase()}</span>
                </div>
                <div className="pizza-ordered-details-container d-flex align-items-center gap-5">
                  <span>$ {cart.price * cart.qty}</span>
                  <div className="pizza-ordered-detailsQty-container d-flex align-items-center gap-2">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => subtractPizzaButton(cart.id)}
                    >
                      {cart.qty === 0 ? 'Eliminar' : '-'}
                    </button>
                    <span>{cart.qty}</span>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => addPizzaButton(cart.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </li>
            ))}
          <li className="list-group-item">
            <div className="payment-container d-flex flex-column gap-2">
              <span className="fs-4">Total: $ {total}</span>
              <button type="button" className="btn btn-success btn-pagar" onClick={pagarFunction}>
                Ir a Pagar
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OrderedPizzaDetails;
