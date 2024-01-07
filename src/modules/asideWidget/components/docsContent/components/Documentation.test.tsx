import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { LocalizationProvider } from "../../../../../localization/LocalizationProvider";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { NavRoutes } from "../../../../../utils/router/routes";
import { routes } from "../../../../../utils/router/routesConfig";
import { Provider } from "react-redux";
import { setupStore } from "../../../../../store/store";

vi.mock("react-firebase-hooks/auth", () => {
  return {
    useAuthState: vi.fn(() => [true]),
  };
});

vi.mock("../../../../../modules/session/components/codeArea/CodeArea", () => ({
  default: () => <div>test</div>,
}));

const router = createMemoryRouter(routes, {
  initialEntries: [NavRoutes.mainPagePath],
});
const store = setupStore();

describe("Documentation", () => {
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

  test("Render documentation", async () => {
    await fireEvent.click(screen.getByTestId("docs-button"));
    expect(screen.getByTestId("spiner")).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText("Types")).toBeInTheDocument();
      expect(screen.getByText("Query")).toBeInTheDocument();
    });
    await fireEvent.click(screen.getByText("Types"));
    expect(screen.getByText("Location")).toBeInTheDocument();
    expect(screen.getByText("CacheControlScope")).toBeInTheDocument();
    await fireEvent.click(screen.getByText("Location"));
    expect(
      screen.getByText("FIELDS: id, name, type, dimension, residents, created"),
    ).toBeInTheDocument();
    await fireEvent.click(screen.getByText("Query"));
    expect(screen.getByText("characters")).toBeInTheDocument();
  });
});
