import Header from "./components/Header";
import Sort from "./components/sort";
import Categories from "./components/Categories";
import PizzaBlock from "./components/PizzaBlock";
import "./scss/app.scss";
import pizzas from "./assets/block-pizzas.json";

const App = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {pizzas.map((obj) => (
                <PizzaBlock key={obj.id} {...obj} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
