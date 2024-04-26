import CardPizza from "../components/CardPizza"
import Header from "../components/Header"

const Home = () => {
  return (
    <section className="home-container">
      <Header title='¡Pizzería Mamma Mia!' subtitle='¡Tenemos las mejores pizzas que podrás encontrar!' />
      <div className="container">
        <CardPizza />
      </div>
    </section>
  )
}

export default Home