import React from 'react';
import { NavLink } from 'react-router-dom';

export default (props) => {
  return(
    <React.Fragment>


      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink exact={true} to="/" activeClassName='active' className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/shopping-cart" activeClassName='active' className="nav-link">My cart</NavLink>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}
