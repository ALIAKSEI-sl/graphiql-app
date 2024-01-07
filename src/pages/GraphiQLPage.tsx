import { useNavigate } from "react-router";
import { useEffect } from "react";
import { NavRoutes } from "../utils/router/routes";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../api/firebase";
import Playground from "../modules/playground/Playground";

export const GraphiQLPage = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (!user) navigate(NavRoutes.mainPagePath);
  }, [user]);

  return <Playground />;
};
