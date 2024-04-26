import { NavLink } from "react-router-dom"

import { useContext } from "react"
import { PizzasContext } from "../context/PizzasContext"

import carritoImg from "../assets/img/carrito.png"
import pizzaImg from "../assets/img/pizza.png"

const NavMenu = () => {

  const { total } = useContext(PizzasContext)

  return (
    <div className="nav-menu-container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <NavLink className="navbar-brand" to="/"><img src={pizzaImg} style={{ width: '1.5em' }} /> Pizzería Mamma Mia!</NavLink>


          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="d-flex align-items-center gap-3 text-black" aria-current="page" to="/carrito"><img src={carritoImg} style={{ width: '1.5em' }} />$ {total}</NavLink>
            </li>
          </ul>

        </div>
      </nav>
    </div>
  )
}

export default NavMenu