import { useNavigate } from "react-router-dom";

import NotFound from "../../assets/notfound.svg";
import { useLocalization } from "../../hooks/useLocalization";
import Button from "../../UI/button/Button";
import { NavRoutes } from "../../utils/router/routes";
import classes from "./notFound.module.scss";

export const NotFound404 = () => {
  const navigate = useNavigate();
  const dictionary = useLocalization();
  const handleBtnClick = () => {
    navigate(NavRoutes.mainPagePath);
  };
  return (
    <div className={classes.notFound}>
      <div className={classes.photo}>
        <img src={NotFound} alt="Not Found" />
        <h3>{dictionary.not_found_page.title}</h3>
      </div>

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
