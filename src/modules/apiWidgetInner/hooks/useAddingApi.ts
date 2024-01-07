import { useState } from "react";

import { setAPIs } from "../../../api/firebase";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { useLocalization } from "../../../hooks/useLocalization";
import { apiSlice } from "../../../store/reducers/ApiSlice";
import { AddNewApiType } from "../../../types/forms";
import { showToastMessage } from "../../forms/util/showToastMessage";

const useAddingApi = () => {
  const { api_exist, api_set, api_error } = useLocalization().api_widget;
  const dispatch = useAppDispatch();
  const { addNewApi } = apiSlice.actions;
  const { apiList } = useAppSelector((state) => state.apiReducer);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddNewApi = async (data: AddNewApiType) => {
    const { api } = data;

    setIsLoading(true);
    if (apiList.includes(api)) {
      showToastMessage(api_exist, "red");
      setIsLoading(false);
      return;
    }

    // добавить проверку API

    const isSet = await setAPIs([...apiList, api]);

    if (isSet) {
      dispatch(addNewApi(api));
      localStorage.setItem("APIS", JSON.stringify([...apiList, api]));
      showToastMessage(api_set, "green");
      return;
    }

    showToastMessage(api_error, "red");
    setIsLoading(false);
  };

  return {
    handleAddNewApi,
    isLoading,
  };
};

export default useAddingApi;
