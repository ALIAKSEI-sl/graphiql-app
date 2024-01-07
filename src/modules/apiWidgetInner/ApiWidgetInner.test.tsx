import { fireEvent, render, screen } from "@testing-library/react";
import ApiWidgetInner from "./ApiWidgetInner";
import { LocalizationProvider } from "../../localization/LocalizationProvider";
import { Provider } from "react-redux";
import { setupStore } from "../../store/store";

const store = setupStore();

describe("Api Widget Inner", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <LocalizationProvider>
          <ApiWidgetInner />
        </LocalizationProvider>
      </Provider>,
    );
  });

  test("", async () => {
    const addApiButtton = screen.getByTestId("add-api-button");
    expect(addApiButtton).toBeInTheDocument();
    await fireEvent.click(addApiButtton);
  });
});
