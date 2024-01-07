import { FC, ReactElement, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth, logout } from "../../api/firebase";
import ExitIcon from "../../assets/icons/logout.svg?react";
import NavBar from "../../components/navBar/NavBar";
import { useLocalization } from "../../hooks/useLocalization";
import { linkInfo } from "../../types/components";
import Button from "../../UI/button/Button";
import Logo from "../../UI/logo/Logo";
import { NavRoutes } from "../../utils/router/routes";
import LanguageSwitcher from "./components/languageSwitcher/LanguageSwitcher";
import MobileMenu from "./components/mobileMenu/MobileMenu";
import classes from "./style.module.scss";

const Header: FC = (): ReactElement => {
  const [isTop, setIsTop] = useState(true);
  const dictionary = useLocalization();
  const [user] = useAuthState(auth);
  const isAuth = !!user;

  const handleLogout = () => {
    logout();
  };

  const authorizedUserNav: linkInfo[] = [
    {
      to: NavRoutes.mainPagePath,
      text: dictionary.navigation.home,
    },
    {
      to: NavRoutes.graphiQL,
      text: dictionary.navigation.playground,
    },
  ];
  const anonymNav: linkInfo[] = [
    {
      to: NavRoutes.mainPagePath,
      text: dictionary.navigation.home,
    },
    {
      to: NavRoutes.loginPagePath,
      text: dictionary.navigation.login,
    },
    {
      to: NavRoutes.registrationPagePath,
      text: dictionary.navigation.registration,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentIsTop = window.scrollY === 0;
      if (currentIsTop !== isTop) {
        setIsTop(currentIsTop);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isTop]);

  return (
    <header className={`${classes.header} ${isTop && classes["header_top"]}`}>
      <Logo />
      <LanguageSwitcher className={classes.lang} />
      {isAuth ? (
        <>
          <NavBar linksInBar={authorizedUserNav} className={classes.nav} />
          <Button
            btnStyle={"onBlack"}
            btnType="round"
            className={classes["logout-btn"]}
            onClick={handleLogout}
          >
            <ExitIcon />
          </Button>
        </>
      ) : (
        <NavBar linksInBar={anonymNav} className={classes.nav} />
      )}
      <MobileMenu
        authorizedUserNav={authorizedUserNav}
        anonymNav={anonymNav}
        isAuth={isAuth}
        logoutAction={handleLogout}
      />
    </header>
  );
};

export default Header;
