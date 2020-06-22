import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CartIcon from "../cart/cart-icon/cart-icon-component";
import { connect } from "react-redux";
// import { useSelector } from "react-redux";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import CartDropdown from "../cart/cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
// Stateless Functional Components
const Header = ({ hidden }) => (
  //const counter = useSelector(state => state.counter);
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand mb-0 h1" to="/">
      <img
        className="header-img img img-responsive ml-auto mr-auto"
        src="https://www.pizzahut.com.pk/assets/images/ph-logo.png"
        width="160"
      />
    </Link>

    <div className="collapse navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            Home1
          </Link>
        </li>
      

        {/* <li>
          {currentUser ? (
            <div className="option" onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
          ) : (
            <Link className="option" to="/signin">
              SIGN IN
            </Link>
          )}
        </li> */}
      </ul>

      {/* <span className="navbar-text">
          <Link className="nav-link" to="/">
            Login
          </Link>
        </span>
        <span className="navbar-text">
          <Link className="nav-link" to="/">
            Register
          </Link>
        </span> */}
      <CartIcon />
    </div>
    {/* hidden comes from Redux */}
    {hidden ? null : <CartDropdown />}
  </nav>
);

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
