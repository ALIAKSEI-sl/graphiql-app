import { FC, ReactElement } from "react";

import { useChangeLanguage } from "../../../../hooks/useChangeLanguage";
import classes from "./style.module.scss";

const LANGUAGES = ["en", "ru"];

type Props = {
  className?: string;
};

const LanguageSwitcher: FC<Props> = (props): ReactElement => {
  const className = props.className
    ? classes.wrapper + " " + props.className
    : classes.wrapper;

  const { setLanguage, language } = useChangeLanguage();

  return (
    <div className={className} onClick={setLanguage}>
      {LANGUAGES.map((lang, i) => (
        <div
          key={lang}
          className={`${classes.lang} ${
            lang === language ? classes.active : ""
          }`}
        >
          {lang}
          {i !== LANGUAGES.length - 1 && (
            <div key={`devider${i}`} className={classes.devider}>
              /
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
