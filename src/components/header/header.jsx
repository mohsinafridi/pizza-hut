import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../cart/cart-icon/cart-icon-component";
import { connect } from "react-redux";
import CartDropdown from "../cart/cart-dropdown/cart-dropdown.component";

import { auth } from "../../firebase/firebase.util";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { HeaderContainer, OptionsContainer, OptionLink } from "./header.styles";
// Stateless Functional Components
// const Header = ({ hidden }) => (
//   <nav className="navbar navbar-expand-lg navbar-light bg-light">
//     <Link className="navbar-brand mb-0 h1" to="/">
//       <img alt="sda"
//         className="header-img img img-responsive ml-auto mr-auto"
//         src="https://www.pizzahut.com.pk/assets/images/ph-logo.png"
//         width="160"
//       />
//     </Link>

//     <div className="collapse navbar-collapse">
//       <ul className="navbar-nav mr-auto">
//         <li className="nav-item active">
//           <Link className="nav-link" to="/">
//             Home
//           </Link>
//         </li>
//       </ul>
//       <CartIcon />
//     </div>
//     {hidden ? null : <CartDropdown />}
//   </nav>
// );

const Header = ({currentUser, hidden}) =>(
    <HeaderContainer>
      <Link className="logo-container" to="/">
        <img
          alt="sda"
          className="header-img img img-responsive ml-auto mr-auto"
          src="https://www.pizzahut.com.pk/assets/images/ph-logo.png"
          width="160"
        />
      </Link>
      <OptionsContainer>
        <OptionLink className="option" to="/shop">
          SHOP currentUser
        </OptionLink>
        <OptionLink className="option" to="/shop">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});
export default connect(mapStateToProps)(Header);
