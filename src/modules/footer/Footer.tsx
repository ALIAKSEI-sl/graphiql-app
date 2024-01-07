import { FC, ReactElement } from "react";

import RSSLogo from "../../assets/rss-logo.svg";
import NavBar from "../../components/navBar/NavBar";
import { useLocalization } from "../../hooks/useLocalization";
import { GithubLinkProps, linkInfo } from "../../types/components";
import Logo from "../../UI/logo/Logo";
import SectionWrapper from "../../UI/sectionWrapper/SectionWrapper";
import { NavRoutes } from "../../utils/router/routes";
import GithubLink from "./components/githubLink/GithubLink";
import classes from "./style.module.scss";

const CREATORS: GithubLinkProps[] = [
  {
    name: "ALIAKSEI-sl",
    link: "https://github.com/ALIAKSEI-sl",
  },
  {
    name: "FilMaxim",
    link: "https://github.com/FilMaxim",
  },
  {
    name: "Illia-Sakharau",
    link: "https://github.com/Illia-Sakharau",
  },
];

const Footer: FC = (): ReactElement => {
  const dictionary = useLocalization();
  const navbarLinks: linkInfo[] = [
    {
      to: NavRoutes.mainPagePath,
      text: dictionary.navigation.home,
    },
    {
      to: NavRoutes.graphiQL,
      text: dictionary.navigation.playground,
    },
  ];

  return (
    <footer className={classes.footer}>
      <SectionWrapper className={classes[`footer__wrapper`]}>
        <div className={classes["top-side"]}>
          <Logo />
          <NavBar linksInBar={navbarLinks} className={classes["nav-bar"]} />
        </div>

        <div className={classes["bottom-side"]}>
          <div className={classes.creators}>
            {dictionary["created_by"]}
            <div className={classes["creators__inner"]}>
              {CREATORS.map((prop) => (
                <GithubLink key={prop.name} {...prop} />
              ))}
            </div>
          </div>
          <div className={classes.right}>
            <a
              href="https://rs.school/"
              target="_blank"
              rel="noreferrer"
              className={classes["rss-logo"]}
            >
              <img src={RSSLogo} alt={dictionary.img_school_alt} />
            </a>
            <div className={classes.copyright}>© 2023</div>
          </div>
        </div>
      </SectionWrapper>
    </footer>
  );
};

export default Footer;
