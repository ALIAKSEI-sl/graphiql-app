import { FC } from "react";
import Button from "../../../../UI/button/Button";
import ArrowIcon from "../../../../assets/icons/arrow-right.svg?react";
import classes from "./style.module.scss";

type Props = {
  title: string;
  isActive: boolean;
  action: () => void;
};

const ApiItem: FC<Props> = ({ title, isActive, action }) => {
  return (
    <Button
      className={classes.item}
      btnStyle={"onBlack"}
      btnType={"rectangle"}
      active={isActive}
      onClick={action}
    >
      <>
        <div className={classes.title}>{title}</div>
        <ArrowIcon />
      </>
    </Button>
  );
};

export default ApiItem;
