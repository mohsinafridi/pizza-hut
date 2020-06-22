import React from "react";
 import { connect } from "react-redux";
 import { toggleCartHidden } from "../../../redux/cart/cart.action";

import  {selectCartItemsCount} from '../../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from "../../../assets/shopping-bag.svg";
import "./cart-icon.scss";

const CartIcon = ({ toggleCartHidden,itemCounts }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCounts}</span>
  </div>
);


const mapStateToProps = (state) => ({
  itemCounts : selectCartItemsCount(state)
})

const mapDispatchToProps  = dispatch => ({
  toggleCartHidden  : () => dispatch(toggleCartHidden())
})
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
