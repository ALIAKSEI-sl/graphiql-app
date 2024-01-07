import { FC, ReactElement } from "react";

import PlayIcon from "../../../../assets/icons/play.svg?react";
import PrettifyIcon from "../../../../assets/icons/prettify.svg?react";
import { useGraphQuery } from "../../../../hooks/useGraphQuery";
import Button from "../../../../UI/button/Button";
import classes from "./style.module.scss";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { graphValueSlice } from "../../../../store/reducers/GraphValueSlice";
import prettifyCode from "../../utils/prettifyCode";

const ToolsBar: FC = (): ReactElement => {
  const sendRequest = useGraphQuery();
  const { query } = useAppSelector((state) => state.graphValueReducer);
  const { setQuery } = graphValueSlice.actions;
  const dispatch = useAppDispatch();

  const runRequest = () => {
    sendRequest();
  };

  const prettify = () => {
    const preparedCode = prettifyCode(query);
    dispatch(setQuery(preparedCode));
  };

  return (
    <div className={classes.bar}>
      <Button btnStyle={"primary"} btnType={"round"} onClick={runRequest}>
        <PlayIcon />
      </Button>
      <Button btnStyle={"onBlack"} btnType={"round"} onClick={prettify}>
        <PrettifyIcon />
      </Button>
    </div>
  );
};

export default ToolsBar;
