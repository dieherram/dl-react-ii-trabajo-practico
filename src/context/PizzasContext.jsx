import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const PizzasContext = createContext()

const PizzasProvider = ({ children }) => {

  const [pizzas, setPizzas] = useState([])
  const [pizzaSelected, setPizzaSelected] = useState([])
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  const navigate = useNavigate()

  const botones = {
    "ver": {
      "color": "btn-info",
      "text": "Ver Más",
      "icono": "https://cdn-icons-png.flaticon.com/512/4955/4955440.png"
    },
    "vender": {
      "color": "btn-danger",
      "text": "Añadir",
      "icono": "https://cdn-icons-png.flaticon.com/512/2611/2611181.png"
    }
  }

  const getData = async () => {
    const url = "/pizzas.json"
    const response = await fetch(url)
    const data = await response.json()
    setPizzas(data)
  }

  useEffect(() => {
    getData()
  }, [])

  // La función getTotalPrice calcula el monto total según las pizzas y cantidades seleccionadas, se actualiza siempre que existe un cambio en estado 'cart', recalculando el total
  useEffect(() => {
    const getTotalPrice = () => {
      const totalPrice = cart.reduce((total, cartPizza) => total + (cartPizza.qty * cartPizza.price), 0);
      setTotal(totalPrice);
    }

    getTotalPrice();
  }, [cart]);

  // Función que guarda la pizza seleccionada en estado pizzaSelected, es invocada luego por 'handleVerPizzaSelected'
  const pizzaSelectedFunction = (id) => {
    const pizzaSelection = pizzas.find(pizza => pizza.id === id)
    setPizzaSelected(pizzaSelection)
  }

  // Función que lleva al usuario a vista '/pizza' luego de seleccionar una pizza en vista '/home'
  const handleVerPizzaSelected = (id) => {
    pizzaSelectedFunction(id)
    navigate(`/pizza/${id}`)
  }

  // Función que agrega pizzas a estado 'cart' este se despliega en vista '/carrito' y sus claves 'price' y 'qty' son utilizadas para mostrar tanto el monto como cantidades totales de cada pizza
  const handleAgregarPizzaSelected = (id) => {
    const pizzaSelection = pizzas.find(pizza => pizza.id === id)

    if (pizzaSelection) {

      const verifyPizzaCart = cart.find(item => item.id === id)

      if (verifyPizzaCart) {
        setCart(prevCart => prevCart.map(item =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        ));
      } else {
        const pizzaSelectionCart = {
          id: pizzaSelection.id,
          img: pizzaSelection.img,
          name: pizzaSelection.name,
          price: pizzaSelection.price,
          qty: 1
        }

        setCart(prevCart => [...prevCart, pizzaSelectionCart])
      }
    }
    navigate(`/carrito`)
  }

  // Aumentar cantidades de pizza en vista '/carrito'
  const addPizzaButton = (id) => {
    const pizzaCart = cart.find(pizza => pizza.id === id)

    if (pizzaCart) {
      setCart(prevCart => prevCart.map(item =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      ))
    }
  }

  // Disminuir cantidades de pizza en vista '/carrito', valida en primer lugar la cantidad de pizzas, para eliminar en caso de ser menor a 0
  const subtractPizzaButton = (id) => {
    const pizzaCart = cart.find(pizza => pizza.id === id)

    if (pizzaCart) {
      if (pizzaCart.qty === 0) {
        setCart(prevCart => prevCart.filter(pizza => pizza.id !== id))
      } else {
        setCart(prevCart => prevCart.map(pizza =>
          pizza.id === id ? { ...pizza, qty: pizza.qty - 1 } : pizza
        ))
      }
    }
  }

  // Vaciar carro de compra y redirigir a usuario a vista '/'
  const pagarFunction = () => {
    setCart([])
    navigate(`/`)
  }

  const globalState = { pizzas, botones, pizzaSelectedFunction, pizzaSelected, handleVerPizzaSelected, handleAgregarPizzaSelected, cart, total, addPizzaButton, subtractPizzaButton, pagarFunction }

  return (
    <PizzasContext.Provider value={globalState}>
      {children}
    </PizzasContext.Provider>
  )
}

export default PizzasProvider