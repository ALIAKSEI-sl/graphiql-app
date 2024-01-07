import ReactDOM from "react-dom/client";
import "./index.scss";
import "./api/firebase";
import App from "./App";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";

const store = setupStore();

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
