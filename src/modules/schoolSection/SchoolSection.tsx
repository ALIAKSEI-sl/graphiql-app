import { motion } from "framer-motion";
import { FC, ReactElement } from "react";

import RSS_LOGO from "../../assets/rss-logo-2.svg";
import { useLocalization } from "../../hooks/useLocalization";
import SectionWrapper from "../../UI/sectionWrapper/SectionWrapper";
import classes from "./style.module.scss";

const opacityAnimation = {
  hiden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const SchoolSection: FC = (): ReactElement => {
  const dictionary = useLocalization();

  return (
    <motion.section
      initial="hiden"
      whileInView="visible"
      viewport={{ amount: 0.5, once: true }}
      className={classes.school}
    >
      <SectionWrapper className={classes[`school__wrapper`]}>
        <motion.a
          variants={opacityAnimation}
          href="https://rs.school/"
          target="_blank"
          rel="noreferrer"
          className={classes["rss-logo"]}
        >
          <img src={RSS_LOGO} alt={dictionary.img_school_alt} />
        </motion.a>
      </SectionWrapper>
    </motion.section>
  );
};

export default SchoolSection;
