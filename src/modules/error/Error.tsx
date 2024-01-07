import { ErrorResponse, useNavigate, useRouteError } from "react-router-dom";

import { useLocalization } from "../../hooks/useLocalization";
import Button from "../../UI/button/Button";
import { NavRoutes } from "../../utils/router/routes";
import classes from "./error.module.scss";

const Errors = () => {
  const error = useRouteError() as ErrorResponse;
  const dictionary = useLocalization();
  const navigate = useNavigate();

  const handleBtnClick = () => {
    navigate(NavRoutes.mainPagePath);
  };
  console.error(error);

  return (
    <div className={classes.error_page}>
      <h2>Oops Error!</h2>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error instanceof Error ? error.message : error.statusText}</i>
      </p>
      <Button
        btnStyle={"primary"}
        btnType="rectangle"
        className={classes["home-btn"]}
        onClick={handleBtnClick}
      >
        {dictionary.not_found_page.btn_home}
      </Button>
    </div>
  );
};

export default Errors;
