import React from "react";
import classes from "./style.module.scss";
import { Suspense } from "react";
import { Spiner } from "../../../../UI/spiner/spiner";

const Documentation = React.lazy(() => import("./components/Documentation"));

const DocsContent = () => {
  return (
    <section className={classes.docs}>
      <Suspense fallback={<Spiner />}>
        <Documentation />
      </Suspense>
    </section>
  );
};

export default DocsContent;
