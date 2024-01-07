import { IntrospectionType } from "graphql";
import { useEffect, useState } from "react";

import { useAppSelector } from "../../../../../hooks/redux";
import style from "./documentation.module.scss";
import { QueriesSection } from "./QueriesSection";
import TypesSection from "./TypesSection";

type Types = {
  queryType: IntrospectionType | undefined;
  mainTypes: IntrospectionType[];
};

const initialTypes = {
  queryType: undefined,
  mainTypes: [],
};

const Documentation = () => {
  const schema = useAppSelector((state) => state.apiReducer.schema);

  const [types, setTypes] = useState<Types>(initialTypes);

  useEffect(() => {
    if (schema) {
      const queryType = schema?.__schema.types.find(
        ({ name }) => name === "Query",
      );
      const mainTypes = schema?.__schema.types.filter(
        ({ name }) => name !== "Query" && !name.startsWith("__"),
      );
      setTypes({ queryType, mainTypes });
    }
  }, [schema]);

  return (
    schema && (
      <div className={style.docs} data-testid="documentation">
        <TypesSection mainTypes={types.mainTypes} />
        <QueriesSection queryType={types.queryType} />
      </div>
    )
  );
};

export default Documentation;
