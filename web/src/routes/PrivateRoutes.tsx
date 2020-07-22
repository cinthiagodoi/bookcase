import React from 'react';
import { Route, RouteComponentProps, Redirect} from 'react-router-dom';

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

export default PrivateRoute;

