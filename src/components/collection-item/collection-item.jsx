import React from "react";
import CustomButton from '../custom-button/custom-button';

import "./collection-item.scss";
import { connect } from "react-redux";
import { addPizzaToCart} from '../../redux/cart/cart.action';


const CollectionItem = ({ item,addItemToCart}) => {
const { title, price, imageUrl }  = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{title}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={()=> addItemToCart(item)}>Add to cart</CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
addItemToCart : item => dispatch(addPizzaToCart(item)) 
})
export default connect(null,mapDispatchToProps)(CollectionItem);
