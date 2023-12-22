import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type SliceFields = {
  currentApi: string;
  apiList: string[];
};

const localAPI = localStorage.getItem('APIS');

const initialState: SliceFields = {
  apiList: typeof(localAPI) === 'string' 
    ? JSON.parse(localAPI) as string[] 
    : ['https://rickandmortyapi.com/graphql'],
  get currentApi() {
    return this.apiList[0];
  },
};

export const apiSlice = createSlice({
  name: "apiSlice",
  initialState,
  reducers: {
    setCurrentApi(state, action: PayloadAction<string>) {
      state.currentApi = action.payload;
    },
    addNewApi(state, action: PayloadAction<string>) {
      state.currentApi = action.payload;
      state.apiList.push(action.payload);
    },
    setApiList(state, action: PayloadAction<string[]>) {
      state.apiList = action.payload;
    },
  },
});

export const apiReducer = apiSlice.reducer;
