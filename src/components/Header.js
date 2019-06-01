import { NavLink } from 'react-router-dom';
import React from 'react';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact>Home{"\t"}</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense{"\t"}</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help{"\t"}</NavLink>
  </header>
);

export default Header;