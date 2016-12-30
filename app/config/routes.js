var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../ui/components/layout/Main.js');
var ProductContainer = require('../ui/containers/ProductContainer.js');

routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={ProductContainer} />
    </Route>
  </Router>
);

module.exports = routes;