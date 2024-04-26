import OrderedPizzaDetails from "../components/OrderedPizzaDetails"

const Carrito = () => {
  return (
    <section className="carrito-container container">
      <h1>Detalles del pedido:</h1>
      <OrderedPizzaDetails />
    </section>
  )
}

export default Carrito