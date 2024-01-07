import { FC, ReactElement, useEffect, useState } from "react";

import { useAppSelector } from "../../../../hooks/redux";
import CodeArea from "../codeArea/CodeArea";
import classes from "./style.module.scss";

const ResponseZone: FC = (): ReactElement => {
  const [value, setValue] = useState("");

  const { data, errors, statusCode } = useAppSelector(
    (state) => state.graphValueReducer.response,
  );

  useEffect(() => {
    if (statusCode) {
      statusCode === 200
        ? setValue(JSON.stringify(data, null, 4))
        : setValue(JSON.stringify(errors, null, 4));
    }
  }, [data]);

  return (
    <div className={classes.wrapper} data-testid="response-zone">
      <CodeArea readOnly={true} value={value} />
    </div>
  );
};

export default ResponseZone;
