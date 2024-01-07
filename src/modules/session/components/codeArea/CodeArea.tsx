import { graphql, updateSchema } from "cm6-graphql";
import { GraphQLSchema } from "graphql";
import { FC, ReactElement, useEffect, useRef } from "react";

import { json, jsonParseLinter } from "@codemirror/lang-json";
import { linter } from "@codemirror/lint";
import { aura } from "@uiw/codemirror-theme-aura";
import { useCodeMirror } from "@uiw/react-codemirror";

import classes from "./style.module.scss";

type Props = {
  value: string;
  readOnly?: boolean;
  schema?: GraphQLSchema;
  setValue?: (value: string) => void;
};

const CodeArea: FC<Props> = ({
  value,
  schema,
  readOnly,
  setValue,
}): ReactElement => {
  const codeArea = useRef<HTMLDivElement>(null);

  const extensions = schema
    ? [graphql(schema)]
    : [json(), linter(jsonParseLinter())];

  const onChangeValue = (value: string) => {
    if (setValue) {
      setValue(value);
    }
  };

  const { setContainer, view } = useCodeMirror({
    extensions,
    theme: aura,
    value: value ?? "",
    container: codeArea.current,
    readOnly: readOnly ?? false,
    onChange(value) {
      onChangeValue(value);
    },
  });

  useEffect(() => {
    if (view && schema) {
      updateSchema(view, schema);
    }
  }, [schema, view]);

  useEffect(() => {
    if (codeArea.current) {
      setContainer(codeArea.current);
    }
  }, [codeArea, setContainer]);

  return <section className={classes.wrapper} ref={codeArea} />;
};

export default CodeArea;
