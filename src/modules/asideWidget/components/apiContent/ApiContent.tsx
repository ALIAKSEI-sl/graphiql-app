import React from "react";
import { Suspense } from "react";

const ApiWidgetInner = React.lazy(
  () => import("../../../apiWidgetInner/ApiWidgetInner"),
);

const ApiContent = () => {
  return (
    <Suspense fallback={<div>ADD SPINER</div>}>
      <ApiWidgetInner />
    </Suspense>
  );
};

export default ApiContent;
