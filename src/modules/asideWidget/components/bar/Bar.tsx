import Button from "../../../../UI/button/Button";
import classes from "./style.module.scss";
import { FC, ReactElement, useEffect, useState } from "react";
import { SwitchContentProps } from "../../types/components";
import DocsContent from "../docsContent/DocsContent";
import ApiContent from "../apiContent/ApiContent";

import ApiIcon from "../../../../assets/icons/api.svg?react";
import BookIcon from "../../../../assets/icons/book.svg?react";
import { useLocalization } from "../../../../hooks/useLocalization";

type Props = {
  switchContent: (propps: SwitchContentProps) => void;
  isContentOpen: boolean;
};

const Bar: FC<Props> = ({ switchContent, isContentOpen }): ReactElement => {
  const dictionary = useLocalization();
  const [isApiActive, setIsApiActive] = useState(false);
  const [isDocsActive, setIsDocsActive] = useState(false);

  const swithOffAllAside = () => {
    setIsApiActive(false);
    setIsDocsActive(false);
  };

  const handleApiClick = () => {
    switchContent({
      isOpen: !isApiActive,
      title: "API",
      content: <ApiContent />,
    });
    swithOffAllAside();
    setIsApiActive(!isApiActive);
  };

  const handleDocsClick = () => {
    switchContent({
      isOpen: !isDocsActive,
      title: dictionary.docs.docs,
      content: <DocsContent />,
    });
    swithOffAllAside();
    setIsDocsActive(!isDocsActive);
  };

  useEffect(() => {
    if (!isContentOpen) {
      swithOffAllAside();
    }
  }, [isContentOpen]);

  return (
    <div className={classes.bar}>
      <Button
        btnStyle={"onWhite"}
        btnType={"round"}
        active={isApiActive}
        onClick={handleApiClick}
        data-testid="api-button"
      >
        <ApiIcon />
      </Button>
      <div className={classes.devider}></div>
      <Button
        btnStyle={"onWhite"}
        btnType={"round"}
        active={isDocsActive}
        onClick={handleDocsClick}
        data-testid="docs-button"
      >
        <BookIcon />
      </Button>
    </div>
  );
};

export default Bar;
