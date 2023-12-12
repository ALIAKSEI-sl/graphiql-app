import classes from "./style.module.scss";
import { FC, ReactElement, useState } from "react";
import { linkInfo } from "../../../types/components";
import NavBar from "../../2-molecules/navBar/NavBar";
import { useLocalization } from "../../../utils/hooks/useLocalization";
import Button from "../../1-atoms/button/Button";
import MenuIcon from "../../../assets/icons/menu.svg?react";

type Props = {
  authorizedUserNav: linkInfo[];
  anonymNav: linkInfo[];
  isAuth: boolean;
  logoutAction: () => void;
};

const MobileMenu: FC<Props> = ({
  authorizedUserNav,
  anonymNav,
  isAuth,
  logoutAction,
}): ReactElement => {
  const dictionary = useLocalization();
  const [isActive, setIsActive] = useState(false);

  const handleMenuBtnClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={classes.wrapper}>
      <Button
        btnStyle={"onBlack"}
        btnType="round"
        className={`${classes["menu-btn"]} ${isActive && classes.active}`}
        onClick={handleMenuBtnClick}
        active={isActive}
      >
        <MenuIcon />
      </Button>

      <div className={`${classes.menu} ${isActive && classes.active}`}>
        {isAuth ? (
          <>
            <NavBar linksInBar={authorizedUserNav} className={classes.nav} />
            <Button
              btnStyle={"onBlack"}
              btnType="rectangle"
              className={classes["logout-btn"]}
              onClick={logoutAction}
            >
              {dictionary.navigation.logout}
            </Button>
          </>
        ) : (
          <NavBar linksInBar={anonymNav} className={classes.nav} />
        )}
      </div>
    </div>
  );
};

export default MobileMenu;