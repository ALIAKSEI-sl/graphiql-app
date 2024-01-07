import { motion } from "framer-motion";
import { FC, ReactElement } from "react";
import { useLocalization } from "../../hooks/useLocalization";
import SectionWrapper from "../../UI/sectionWrapper/SectionWrapper";
import { MDeveloperCard } from "./components/developerCard/DeveloperCard";
import SectionHeader from "./components/header/SectionHeader";
import { DEVELOPERS_INFO } from "./constants";
import classes from "./style.module.scss";

const topAnimation = {
  hiden: {
    y: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const TeamSection: FC = (): ReactElement => {
  const dictionary = useLocalization();
  const { title, subtitle } = dictionary.team_section;

  return (
    <motion.section
      initial="hiden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
      className={classes.team}
    >
      <SectionWrapper className={classes[`team__wrapper`]}>
        <SectionHeader
          title={title}
          subtitle={subtitle}
        />
        <div className={classes.developers}>
          {DEVELOPERS_INFO(dictionary).map((developer, i) => (
            <MDeveloperCard
              custom={i}
              variants={topAnimation}
              key={i}
              {...developer}
            />
          ))}
        </div>
      </SectionWrapper>
    </motion.section>
  );
};

export default TeamSection;
