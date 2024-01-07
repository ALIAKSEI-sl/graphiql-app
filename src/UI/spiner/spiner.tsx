import style from "./spiner.module.scss";

export const Spiner: React.FC = () => {
  return (
    <div className={style.loader_wrap} data-testid="spiner">
      <div className={style.loader}></div>
    </div>
  );
};
