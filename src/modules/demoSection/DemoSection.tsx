import { motion } from "framer-motion";
import { FC, ReactElement } from "react";

import IMG_DESK from "../../assets/demo-desk.png";
import IMG_MOB from "../../assets/demo-mob.png";
import { useLocalization } from "../../hooks/useLocalization";
import SectionWrapper from "../../UI/sectionWrapper/SectionWrapper";
import classes from "./style.module.scss";

const leftAnimation = {
  hiden: {
    x: -160,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};
const rightAnimation = {
  hiden: {
    x: 160,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const DemoSection: FC = (): ReactElement => {
  const dictionary = useLocalization().demo_section;

  return (
    <motion.section
      initial="hiden"
      whileInView="visible"
      viewport={{ amount: 0.1 }}
      className={classes.demo}
    >
      <SectionWrapper className={classes[`demo__wrapper`]}>
        <motion.div variants={leftAnimation} className={classes.text}>
          <p>{dictionary.text_1_white}</p>
          <p className={classes.colored}>{dictionary.text_1_colored}</p>
        </motion.div>
        <motion.div variants={rightAnimation} className={classes["img-desk"]}>
          <img src={IMG_DESK} alt={dictionary.img_desk_alt} />
        </motion.div>
      </SectionWrapper>
      <SectionWrapper className={classes[`demo__wrapper`]}>
        <motion.div variants={leftAnimation} className={classes["img-mob"]}>
          <img src={IMG_MOB} alt={dictionary.img_mobile_alt} />
        </motion.div>
        <motion.div variants={rightAnimation} className={classes.text}>
          <p>{dictionary.text_2_white}</p>
          <p className={classes.colored}>{dictionary.text_2_colored}</p>
        </motion.div>
      </SectionWrapper>
    </motion.section>
  );
};

export default DemoSection;
