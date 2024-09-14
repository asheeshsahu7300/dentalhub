import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const PrivateRoute = ({ children, ...rest }) => {
  const { currentUser, loading } = useAuth();

  if (loading) {
    // Optionally show a loading spinner or placeholder while checking auth status
    return <div>Loading...</div>;
    console.log(currentUser);
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        currentUser ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/adminlogin",
              state: { to: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
