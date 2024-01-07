import style from "./documentation.module.scss";

export interface Props1 {
  type: PropsType;
}

export interface PropsType {
  kind: string;
  name: string;
  ofType: PropsType;
}

function ReturnType(props: Props1) {
  const type = props.type;

  switch (type.kind) {
    case "LIST":
      return (
        <span>
          [<span className={style.docs_type}>{type.ofType.name}</span>]
        </span>
      );
    case "NON_NULL":
      return (
        <span>
          <span className={style.docs_type}>{type.ofType.name}</span>!
        </span>
      );
    default:
      return <span className={style.docs_type}>{type.name}</span>;
  }
}

export default ReturnType;
