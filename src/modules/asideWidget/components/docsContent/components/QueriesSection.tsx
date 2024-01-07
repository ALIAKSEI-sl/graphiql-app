import { IntrospectionObjectType, IntrospectionType } from "graphql";
import { useState } from "react";

import { useLocalization } from "../../../../../hooks/useLocalization";
import style from "./documentation.module.scss";
import Queries from "./Queries";

interface QueriesSection {
  queryType: IntrospectionType | undefined;
}
export const QueriesSection = ({ queryType }: QueriesSection) => {
  const dictionary = useLocalization();

  const [openQueries, setOpenQueries] = useState<boolean>(false);

  return (
    <span>
      <button
        className={`${style.docs_link} ${style.docs_base}`}
        onClick={() => {
          setOpenQueries(!openQueries);
        }}
      >
        {dictionary.docs.query}
      </button>
      {!openQueries && <span className={style.docs_symbol}> ▼</span>}
      {openQueries && (
        <div className={style.docs_nested}>
          <Queries queries={queryType as IntrospectionObjectType} />
        </div>
      )}
    </span>
  );
};
