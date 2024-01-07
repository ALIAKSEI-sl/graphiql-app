import Button from "../../../../UI/button/Button";
import classes from "./style.module.scss";
import { FC, ReactElement } from "react";
import CloseIcon from "../../../../assets/icons/close.svg?react";

type Props = {
  title: string;
  children: ReactElement;
  closeAside: () => void;
};

const ContentWrapper: FC<Props> = ({
  title,
  children,
  closeAside,
}): ReactElement => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <h5>{title}</h5>
        <Button btnStyle={"onBlack"} btnType={"round"} onClick={closeAside}>
          <CloseIcon />
        </Button>
      </div>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default ContentWrapper;
