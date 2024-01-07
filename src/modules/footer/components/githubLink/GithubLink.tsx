import classes from "./style.module.scss";
import { FC, ReactElement } from "react";
import GithubLogo from "../../../../assets/github-logo.svg";
import { GithubLinkProps } from "../../../../types/components";

const GithubLink: FC<GithubLinkProps> = ({ link, name }): ReactElement => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className={classes.link}>
      <img src={GithubLogo} alt="Github logo" />
      <span>{name}</span>
    </a>
  );
};

export default GithubLink;
