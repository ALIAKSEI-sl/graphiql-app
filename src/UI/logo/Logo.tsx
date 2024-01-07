import classes from "./style.module.scss";
import { FC, ReactElement } from "react";
import AppLogo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { NavRoutes } from "../../utils/router/routes";

type Props = {
  className?: string;
};

const Logo: FC<Props> = (props): ReactElement => {
  const className = props.className
    ? classes.logo + " " + props.className
    : classes.logo;

  return (
    <Link className={className} to={NavRoutes.mainPagePath}>
      <img src={AppLogo} alt="G...QL Logo" />
    </Link>
  );
};

export default Logo;
