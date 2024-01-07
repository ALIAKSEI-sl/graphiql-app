import { FC, ReactElement } from "react";

import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { graphValueSlice } from "../../../../store/reducers/GraphValueSlice";
import CodeArea from "../codeArea/CodeArea";

const VariablesContent: FC = (): ReactElement => {
  const dispatch = useAppDispatch();

  const { setVariables } = graphValueSlice.actions;

  const { variables } = useAppSelector((state) => state.graphValueReducer);

  const setValue = (value: string): void => {
    const action = setVariables(value);
    dispatch(action);
  };

  return <CodeArea value={variables} setValue={setValue} />;
};

export default VariablesContent;
