import React from 'react';
import {Link } from 'react-router-dom';

const PortfolioPage = () => (
    <div>
      <p>Check out the work that i've done</p>
      <Link to="/portfolio/item1">Item One</Link>
      <Link to="/portfolio/item2">Item Two</Link>
    </div>
);

export default PortfolioPage;