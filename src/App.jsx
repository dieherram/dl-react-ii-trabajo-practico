import './App.css'

import { Routes, Route } from "react-router-dom";
import NavMenu from "./components/NavMenu";

import Home from "./views/Home"
import Pizza from "./views/Pizza";
import Carrito from "./views/Carrito"
import NotFound from './views/NotFound';

const App = () => {

  return (
    <div className='app-container'>
      <NavMenu />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/pizza/:id"
          element={<Pizza />}
        />
        <Route
          path="/carrito"
          element={<Carrito />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>

    </div>
  )
}

export default App
