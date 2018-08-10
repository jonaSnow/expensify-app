import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';
import Contact from '../components/ContactPage';
import Portfolio from '../components/PortfolioPage';
import PortfolioItem from '../components/PortfolioItemPage';


const AppRouter = () => (
<BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/portfolio" component={Portfolio} exact={true} />
        <Route path="/portfolio/:id" component={PortfolioItem} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
