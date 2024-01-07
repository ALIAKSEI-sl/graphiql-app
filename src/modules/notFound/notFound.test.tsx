import { Provider } from "react-redux";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { routes } from "../../utils/router/routesConfig";
import { setupStore } from "../../store/store";
import { fireEvent, render, screen } from "@testing-library/react";
import { LocalizationProvider } from "../../localization/LocalizationProvider";

const router = createMemoryRouter(routes, {
  initialEntries: ["/test"],
});

describe("Not Found", () => {
  test("Render NotFound page", async () => {
    render(
      <Provider store={setupStore()}>
        <LocalizationProvider>
          <RouterProvider router={router} />
        </LocalizationProvider>
      </Provider>,
    );

    expect(screen.getByText("Page Not Found")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Home Page" }),
    ).toBeInTheDocument();
    await fireEvent.click(screen.getByRole("button", { name: "Home Page" }));
    expect(
      screen.getByRole("button", { name: "Get started" }),
    ).toBeInTheDocument();
  });
});
