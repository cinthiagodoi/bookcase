import React from "react";
import { BrowserRouter, Route, Switch, RouteComponentProps, Redirect } from "react-router-dom";

import Home from '../pages/Home'
import CreateUser from '../pages/CreateLogin'

import { isAuthenticated } from '../services/auth';


interface Props {
	Component: React.FC<RouteComponentProps>
	path: string;
	exact?: boolean;
}; 

const PrivateRoute = ({ Component, path, exact = false }: Props): JSX.Element => {
  return (
    <Route 
      exact={exact}
      path={path}
      render={(props: RouteComponentProps) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: {from: props.location}}} />
        )
      }
    />
  )
}

const Routes : React.FC = (): JSX.Element => (
    <BrowserRouter>
      <Switch>
        < Route component={Home} path='/' exact />
        < Route component={CreateUser} path='/create-account' exact />
        < PrivateRoute Component={() => <h1>App</h1>} path='' />
      </Switch>
    </BrowserRouter>

)

export default Routes;

