import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";

import Header from "./components/header/header";

import PizzaList from "./components/pizza//pizza-list.component";
import CheckoutPage from './pages/checkout/checkout.component';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop.jsx';
import SignInAndSignUp from './pages/signInAndSingUp/signin-signup';

class App extends React.Component {
  render() {   
    return (
      <div>
      <Header/>
      <Switch>
      <Route exact path='/' component={HomePage} /> 
      <Route path='/shop' component={ShopPage} />  
      <Route exact path="/pizza"><PizzaList /></Route>
      <Route exact path='/checkout' component={CheckoutPage} />
        {/* <Route
          exact
          path='/signin'
          render={() =>
            this.props.currentUser ? (
              <Redirect to='/' />
            ) : (
              <SignInAndSignUp />
            )
          }
        />           */}
      </Switch>
    </div>


      // <Router>
      //   <div>
      //     <Header />
      //   </div>
      //   <div className="container">
      //     <Switch>
      //       <Route exact path="/">
      //         <MainPage />
      //       </Route>
      //       <Route exact path="/pizza-view">
      //         <PizzaList />
      //       </Route>
      //       <Route exact path='/checkout' component={CheckoutPage} />
      //     </Switch>
      //   </div>
      // </Router>
    );
  }
}

export default App;
