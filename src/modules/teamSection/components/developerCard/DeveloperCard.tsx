import { motion } from "framer-motion";
import { DeveloperInfo } from "../../types";
import classes from "./style.module.scss";
import { forwardRef } from "react";

export const DeveloperCard = forwardRef<HTMLAnchorElement, DeveloperInfo>(
  ({ name, position, description, photoURL, githubUrl }, ref) => {
    return (
      <a
        className={classes.card}
        ref={ref}
        href={githubUrl}
        target="_blank"
        rel="noreferrer"
      >
        <div className={classes["img-wrapper"]}>
          <img src={photoURL} alt={`Photo ${name}`} />
        </div>
        <h4>{name}</h4>
        <h6>{position}</h6>
        <p>{description}</p>
      </a>
    );
  },
);

export const MDeveloperCard = motion(DeveloperCard);
