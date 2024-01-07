import classes from "./style.module.scss";
import { FC, ReactElement } from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const SectionWrapper: FC<Props> = (props): ReactElement => {
  const className = props.className
    ? classes.sectionWrapper + " " + props.className
    : classes.sectionWrapper;

  return (
    <div className={className} data-testid="section-wrapper">
      {props.children}
    </div>
  );
};

export default SectionWrapper;
