import { fireEvent, render, screen } from "@testing-library/react";
import { setupStore } from "../../store/store";
import { Provider } from "react-redux";
import { LocalizationProvider } from "../../localization/LocalizationProvider";
import { RouterProvider, createMemoryRouter } from "react-router";
import { routes } from "../../utils/router/routesConfig";
import { NavRoutes } from "../../utils/router/routes";

const router = createMemoryRouter(routes, {
  initialEntries: [NavRoutes.authPath],
});

describe("Auth", () => {
  test("renders Auth component", async () => {
    render(
      <Provider store={setupStore()}>
        <LocalizationProvider>
          <RouterProvider router={router} />
        </LocalizationProvider>
      </Provider>,
    );
    expect(screen.getByTestId("login")).toBeInTheDocument();
    expect(screen.getByTestId("registration")).toBeInTheDocument();
    await fireEvent.click(screen.getByTestId("registration"));
    expect(screen.getByText("name:")).toBeInTheDocument();
    await fireEvent.click(screen.getByRole("button", { name: "Registration" }));
    expect(screen.getByText("name:")).toBeInTheDocument();
  });
});
