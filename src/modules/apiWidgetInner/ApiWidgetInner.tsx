import { FC, ReactElement } from "react";
import ApiForm from "./components/form/ApiForm";
import classes from "./style.module.scss";
import ApiList from "./components/apiList/ApiList";

const ApiWidgetInner: FC = (): ReactElement => {
  return (
    <section className={classes.inner}>
      <ApiList />
      <ApiForm />
    </section>
  );
};

export default ApiWidgetInner;
