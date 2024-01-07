import { FC, ReactElement } from "react";

import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { graphValueSlice } from "../../../../store/reducers/GraphValueSlice";
import CodeArea from "../codeArea/CodeArea";

const HeadersContent: FC = (): ReactElement => {
  const dispatch = useAppDispatch();

  const { setHeaders } = graphValueSlice.actions;

  const { headers } = useAppSelector((state) => state.graphValueReducer);

  const setValue = (value: string): void => {
    const action = setHeaders(value);
    dispatch(action);
  };

  return <CodeArea value={headers} setValue={setValue} />;
};

export default HeadersContent;
