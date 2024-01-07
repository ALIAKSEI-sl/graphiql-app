import { FC, ReactElement } from "react";

import RequestZone from "./components/requestZone/RequestZone";
import ResponseZone from "./components/responseZone/ResponseZone";
import classes from "./style.module.scss";

const Session: FC = (): ReactElement => {
  return (
    <div className={classes.session}>
      <RequestZone />
      <ResponseZone />
    </div>
  );
};

export default Session;
