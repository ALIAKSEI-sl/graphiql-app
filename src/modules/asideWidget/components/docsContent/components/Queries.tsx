import { IntrospectionObjectType } from "graphql";
import ReturnType, { PropsType } from "./ReturnType";
import style from "./documentation.module.scss";

interface Props {
  queries: IntrospectionObjectType;
}

const Queries = (props: Props) => {
  const { queries } = props;
  return (
    queries && (
      <div className={style.docs_queries}>
        {queries.fields.map((query) => (
          <div key={query.name}>
            <div>
              <span className={style.docs_query}>{query.name}</span>
              <span>(</span>

              <span>
                {query.args &&
                  query.args.map((arg) => (
                    <div key={arg.name}>
                      <span className={style.docs_args}>{arg.name}</span>:{" "}
                      <ReturnType type={arg.type as unknown as PropsType} />
                      {arg.defaultValue && (
                        <span>
                          {" "}
                          ={" "}
                          <span className={style.docs_defaultValue}>
                            {arg.defaultValue}
                          </span>
                        </span>
                      )}
                    </div>
                  ))}
              </span>
              <span>
                ): <ReturnType type={query.type as unknown as PropsType} />
              </span>
            </div>
            <div>{query.description}</div>
          </div>
        ))}
      </div>
    )
  );
};

export default Queries;
