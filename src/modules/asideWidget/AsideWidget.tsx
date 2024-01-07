import { FC, ReactElement, useState } from "react";
import classes from "./style.module.scss";
import Bar from "./components/bar/Bar";
import ContentWrapper from "./components/contentWrapper/ContentWrapper";
import { SwitchContentProps } from "./types/components";

const AsideWidget: FC = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState<ReactElement>(<></>);

  const switchContent = (props: SwitchContentProps) => {
    const { isOpen, title, content } = props;
    setIsOpen(isOpen);
    setTitle(title);
    setContent(content);
  };

  const closeAside = () => {
    setIsOpen(false);
  };

  return (
    <div className={classes.bar} data-testid="aside-widget">
      <Bar switchContent={switchContent} isContentOpen={isOpen} />
      {isOpen && (
        <ContentWrapper title={title} closeAside={closeAside}>
          {content}
        </ContentWrapper>
      )}
    </div>
  );
};

export default AsideWidget;
