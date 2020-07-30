import React, { Component } from 'react';
import Home from './Home';
import ShoppingCart from './ShoppingCart';
import ProductDetailsPage from './ProductDetailsPage';
import PageNotFound from '../views/PageNotFound';
import Header from '../views/Header';
import NavContainer from '../containers/NavContainer';
import Men from "./Men";
import Women from "./Women";
import Kids from "./Kids";
import Sale from "./Sale";

export default class BasePage extends Component {
  render() {
    let componentRendered = '';
    switch (this.props.pageName) {
      case "Home":
        componentRendered = <Home {...this.props}/>;
        break;
      case "men":
        componentRendered = <Men {...this.props}/>;
        break;
      case "women":
        componentRendered = <Women {...this.props}/>;
        break;
      case "kids":
        componentRendered = <Kids {...this.props}/>;
        break;
      case "sale":
        componentRendered = <Sale {...this.props}/>;
        break;
      case "ProductDetailsPage":
        componentRendered = <ProductDetailsPage {...this.props}/>;
        break;
      case "ShoppingCart":
        componentRendered = <ShoppingCart {...this.props}/>;
        break;
      default:
        componentRendered = <PageNotFound {...this.props}/>;
    };

    return(
      <div className="App">
        <Header />
        <NavContainer />
        {componentRendered}

      </div>
    );
  }
}
