import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

import { auth } from "../../api/firebase";
import { useLocalization } from "../../hooks/useLocalization";
import { NavRoutes } from "../../utils/router/routes";
import classes from "./auth.module.scss";

const Auth = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const dictionary = useLocalization();

  useEffect(() => {
    if (user) navigate(NavRoutes.graphiQL);
  }, [user]);

  return (
    <div className={classes.login}>
      <nav className={classes.navbar}>
        <NavLink
          to={NavRoutes.loginPagePath}
          className={({ isActive }) => (isActive ? classes.active : "")}
          data-testid="login"
        >
          {dictionary.navigation.login}
        </NavLink>
        <NavLink
          to={NavRoutes.registrationPagePath}
          className={({ isActive }) => (isActive ? classes.active : "")}
          data-testid="registration"
        >
          {dictionary.navigation.registration}
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Auth;
