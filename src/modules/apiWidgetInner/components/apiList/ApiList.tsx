import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import ApiItem from "../apiItem/ApiItem";
import classes from "./style.module.scss";
import { apiSlice } from "../../../../store/reducers/ApiSlice";

const ApiList: FC = () => {
  const { apiList, currentApi } = useAppSelector((state) => state.apiReducer);
  const dispatch = useAppDispatch();
  const { setCurrentApi } = apiSlice.actions;

  return (
    <div className={classes.list}>
      {apiList.map((api) => (
        <ApiItem
          key={api}
          title={api}
          isActive={api === currentApi}
          action={() => {
            dispatch(setCurrentApi(api));
          }}
        />
      ))}
    </div>
  );
};

export default ApiList;
