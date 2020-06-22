import React, { Component } from "react";

import Pizza from "./pizza.component";

class PizzaList extends Component {
  state = {
    pizzas: [
      {
        id: 1,
        name: "Chicken Tikka BBQ",
        price: 50,
        imageUrl:
          "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523__340.jpg",
      },
      {
        id: 2,
        name: "Chicken Fajita ",
        price: 50,
        imageUrl:
          "https://cdn.pixabay.com/photo/2017/01/03/11/22/pizza-1949157__340.jpg",
      },
      {
        id: 3,
        name: "Pizza Basil",
        price: 50,
        imageUrl:
          "https://cdn.pixabay.com/photo/2016/02/19/11/30/pizza-1209748__340.jpg",
      },
      {
        id: 4,
        name: "Tandori Pizza",
        price: 50,
        imageUrl:
          "https://cdn.pixabay.com/photo/2016/04/21/22/50/pizza-1344720__340.jpg",
      },
      {
        id: 5,
        name: "Hot and Spicy Pizza",
        price: 50,
        imageUrl:
          "https://cdn.pixabay.com/photo/2016/06/08/00/03/pizza-1442946__340.jpg",
      },
      {
        id: 6,
        name: "Grilled pizza",
        price: 50,
        imageUrl:
          "https://cdn.pixabay.com/photo/2017/12/05/20/09/pizza-3000274__340.jpg",
      },
      {
        id: 7,
        name: "Tikka Achar Special Pizza",
        price: 50,
        imageUrl:
          "https://cdn.pixabay.com/photo/2017/01/03/11/33/pizza-1949183__340.jpg",
      },
    ],
  };

//   handleOrderPizza = (name) => {
//     alert("you ordered : " + name);
//   };

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.pizzas.map((pizza) => (
            <Pizza
              key={pizza.id}
              pizza={pizza}              
            />
          ))}
        </div>
      </div>
    );
  }
}

export default PizzaList;
