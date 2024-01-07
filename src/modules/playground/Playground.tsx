import { FC, ReactElement } from "react";
import SectionWrapper from "../../UI/sectionWrapper/SectionWrapper";
import classes from "./style.module.scss";
import Session from "../session/Session";
import AsideWidget from "../asideWidget/AsideWidget";

const Playground: FC = (): ReactElement => {
  return (
    <section className={classes.playground}>
      <SectionWrapper className={classes[`playground__wrapper`]}>
        <AsideWidget />
        <Session />
      </SectionWrapper>
    </section>
  );
};

export default Playground;
