import classes from "./style.module.scss";
import { FC, ReactElement } from "react";

type props = {
  title: string;
  subtitle: string;
};

const SectionHeader: FC<props> = ({ title, subtitle }): ReactElement => {
  return (
    <div className={classes.header}>
      <h2>{title}</h2>
      <h5>{subtitle}</h5>
    </div>
  );
};

export default SectionHeader;
