import { NavLink } from "react-router-dom";
import classes from "./style.module.scss";
import { FC, ReactElement } from "react";
import { linkInfo } from "../../types/components";

type Props = {
  linksInBar: linkInfo[];
  className?: string;
};

const NavBar: FC<Props> = (props): ReactElement => {
  const className = props.className
    ? classes.navBar + " " + props.className
    : classes.navBar;

  return (
    <nav className={className}>
      {props.linksInBar.map((linkInfo) => (
        <NavLink
          to={linkInfo.to}
          className={({ isActive }) => (isActive ? classes.active : "")}
          key={linkInfo.text}
        >
          {linkInfo.text}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavBar;
