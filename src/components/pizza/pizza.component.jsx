import React from "react";
import { connect } from "react-redux";

import { addPizzaToCart } from "../../redux/cart/cart.action";

const Pizza = ({ pizza, addPizzaToCart }) => {
  const { name, price, imageUrl, id } = pizza;
  console.log(pizza);
  return (
    <div className="col-sm-3 m-2">
      <div className="card" style={{ width: 280 }} key={id}>
        <img className="card-img-top" alt="pizza" src={imageUrl} />
        <div className="card-body">
          <h5 className="card-title">{name.toUpperCase()}</h5>
          <p className="card-text">{price}</p>
          <button className="btn btn-danger"
            onClick={() => addPizzaToCart(pizza)}>
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addPizzaToCart: pizza => dispatch(addPizzaToCart(pizza)),
});
export default connect(null, mapDispatchToProps)(Pizza);
