import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { LocalizationProvider } from "../localization/LocalizationProvider";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { NavRoutes } from "../utils/router/routes";
import { routes } from "../utils/router/routesConfig";
import { Provider } from "react-redux";
import { setupStore } from "../store/store";

vi.mock("react-firebase-hooks/auth", () => {
  return {
    useAuthState: vi.fn(() => [true]),
  };
});

vi.mock("../modules/session/components/codeArea/CodeArea", () => ({
  default: () => <div>test</div>,
}));

const router = createMemoryRouter(routes, {
  initialEntries: [NavRoutes.mainPagePath],
});
const store = setupStore();

describe("GraphQL page", () => {
  beforeEach(async () => {
    render(
      <Provider store={store}>
        <LocalizationProvider>
          <RouterProvider router={router} />
        </LocalizationProvider>
      </Provider>,
    );

    const playgroundLink = screen.getAllByRole("link", {
      name: "Playground",
    })[0];
    expect(playgroundLink).toBeInTheDocument();
    await fireEvent.click(playgroundLink);
  });

  test("Render page", async () => {
    expect(screen.getByTestId("request-zone")).toBeInTheDocument();
    expect(screen.getByTestId("response-zone")).toBeInTheDocument();
    expect(screen.getByTestId("aside-widget")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Variables" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Headers" })).toBeInTheDocument();
    await fireEvent.click(screen.getByRole("button", { name: "Variables" }));
    await fireEvent.click(screen.getByRole("button", { name: "Headers" }));
  });

  test("Render API widget", async () => {
    const apiButton = screen.getByTestId("api-button");
    expect(apiButton).toBeInTheDocument();

    await act(async () => {
      await fireEvent.click(apiButton);
    });

    const title = screen.getByText("API");
    expect(title).toBeInTheDocument();
  });

  test("Render DOCS widget", async () => {
    const docsButton = screen.getByTestId("docs-button");
    expect(docsButton).toBeInTheDocument();

    await act(async () => {
      await fireEvent.click(docsButton);
    });

    const title = screen.getByText("Docs");
    expect(title).toBeInTheDocument();
  });
});
