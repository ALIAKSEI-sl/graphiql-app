import classes from "./style.module.scss";
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  ReactElement,
} from "react";

type Props = {
  btnStyle: "onWhite" | "onBlack" | "primary";
  btnType: "round" | "rectangle";
  children: React.ReactNode;
  active?: boolean;
  className?: string;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button: FC<Props> = ({
  btnType,
  btnStyle,
  children,
  active,
  className,
  ...props
}): ReactElement => {
  const finalClassName = className
    ? `${classes.button} ${classes[btnType]} ${
        classes[btnStyle]
      } ${className} ${active && classes.active}`
    : `${classes.button} ${classes[btnType]} ${classes[btnStyle]} ${
        active && classes.active
      }`;

  return (
    <button className={finalClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;
