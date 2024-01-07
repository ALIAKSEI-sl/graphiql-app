import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ResponseData } from "../../types/graphQuery";

type SliceFields = {
  query: string;
  headers: string;
  variables: string;
  response: ResponseData;
  isLoading: boolean;
};

const initialState: SliceFields = {
  query: "",
  headers: "",
  variables: "",
  response: {
    data: null,
    errors: null,
    statusCode: null,
  },
  isLoading: false,
};

export const graphValueSlice = createSlice({
  name: "graphValueSlice",
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    setHeaders(state, action: PayloadAction<string>) {
      state.headers = action.payload;
    },
    setVariables(state, action: PayloadAction<string>) {
      state.variables = action.payload;
    },
    setResponse(state, action: PayloadAction<ResponseData>) {
      state.response = action.payload;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const graphValueReducer = graphValueSlice.reducer;
