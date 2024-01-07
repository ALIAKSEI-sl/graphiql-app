import { IntrospectionType } from "graphql";
import { useState } from "react";

import { useLocalization } from "../../../../../hooks/useLocalization";
import style from "./documentation.module.scss";
import Types from "./Types";

interface TypesSection {
  mainTypes: IntrospectionType[] | undefined;
}

const TypesSection = ({ mainTypes }: TypesSection) => {
  const dictionary = useLocalization();
  const [openTypes, setOpenTypes] = useState<boolean>(false);

  return (
    <span>
      <button
        className={`${style.docs_link} ${style.docs_base}`}
        onClick={() => {
          setOpenTypes(!openTypes);
        }}
      >
        {dictionary.docs.types}
      </button>
      {!openTypes && <span className={style.docs_symbol}> ▼</span>}
      {openTypes && (
        <div className={style.docs_nested}>
          <Types types={mainTypes as ReadonlyArray<IntrospectionType>} />
        </div>
      )}
    </span>
  );
};

export default TypesSection;
