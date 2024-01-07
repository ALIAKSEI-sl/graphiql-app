import { buildClientSchema, buildSchema } from "graphql";
import { FC, ReactElement, useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { useLocalization } from "../../../../hooks/useLocalization";
import { apiSlice } from "../../../../store/reducers/ApiSlice";
import { graphValueSlice } from "../../../../store/reducers/GraphValueSlice";
import { getSchema } from "../../../asideWidget/components/docsContent/getSchema";
import CodeArea from "../codeArea/CodeArea";
import ExpandableZone from "../expandableZone/ExpandableZone";
import ToolsBar from "../toolsBar/ToolsBar";
import classes from "./style.module.scss";

const RequestZone: FC = (): ReactElement => {
  const dispatch = useAppDispatch();
  const dictionary = useLocalization();

  const { setSchema } = apiSlice.actions;
  const { setQuery } = graphValueSlice.actions;

  const { query } = useAppSelector((state) => state.graphValueReducer);
  const { currentApi, schema } = useAppSelector((state) => state.apiReducer);

  const [graphQLSchema, setGraphQLSchema] = useState(buildSchema("type Query"));

  const setValue = (value: string): void => {
    const action = setQuery(value);
    dispatch(action);
  };

  useEffect(() => {
    (async () => {
      const schema = await getSchema(currentApi, dictionary.auth_messages);
      dispatch(setSchema(schema ?? null));
    })();
  }, [currentApi]);

  useEffect(() => {
    if (schema) {
      setGraphQLSchema(buildClientSchema(schema));
    } else {
      setGraphQLSchema(buildSchema("type Query"));
    }
  }, [schema]);

  return (
    <div className={classes.wrapper} data-testid="request-zone">
      <div className={classes.main}>
        <CodeArea schema={graphQLSchema} value={query} setValue={setValue} />
        <ToolsBar />
      </div>
      <ExpandableZone />
    </div>
  );
};

export default RequestZone;
