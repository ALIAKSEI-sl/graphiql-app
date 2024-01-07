import view from "../../../../assets/view.svg";
import noView from "../../../../assets/no-view.svg";
import styles from "./visibilityIcon.module.scss";

interface VisibilityIconProps {
  handleVisibility: () => void;
  passwordVisibility: boolean;
}

export const VisibilityIcon = ({
  handleVisibility,
  passwordVisibility,
}: VisibilityIconProps) => {
  return (
    <button
      type="button"
      onClick={handleVisibility}
      className={styles.visibilityIcon}
    >
      <img src={passwordVisibility ? view : noView} alt="visibility icon" />
    </button>
  );
};
