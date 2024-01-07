import { fireEvent, render, screen } from "@testing-library/react";
import { LocalizationProvider } from "../localization/LocalizationProvider";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { routes } from "../utils/router/routesConfig";
import { NavRoutes } from "../utils/router/routes";

const router = createMemoryRouter(routes, {
  initialEntries: [NavRoutes.mainPagePath],
});

describe("Main page", () => {
  beforeEach(() => {
    render(
      <LocalizationProvider>
        <RouterProvider router={router} />
      </LocalizationProvider>,
    );
  });

  test("Render demo section", async () => {
    const langSwither = screen.getByText("ru");
    const phrase1p1 = screen.getByText("Requests with");
    const phrase1p2 = screen.getByText("syntax higlighting");
    const phrase2p1 = screen.getByText("Elaborate design");
    const phrase2p2 = screen.getByText("from mobile to desktop");

    expect(phrase1p1).toBeInTheDocument();
    expect(phrase1p2).toBeInTheDocument();
    expect(phrase2p1).toBeInTheDocument();
    expect(phrase2p2).toBeInTheDocument();

    await fireEvent.click(langSwither);

    expect(phrase1p1.innerHTML).toEqual("Запросы с");
    expect(phrase1p2.innerHTML).toEqual("подсветкой синтаксиса");
    expect(phrase2p1.innerHTML).toEqual("Продуманный дизайн");
    expect(phrase2p2.innerHTML).toEqual(
      "от широкоэкранных до мобильных устройств",
    );
  });

  test("Render school section", async () => {
    const schoolLinks = screen.getAllByAltText(
      "Link to The Rolling Scopes School",
    );
    expect(schoolLinks.length).toEqual(2);
  });

  test("Render our team section", async () => {
    const langSwither = screen.getByText("ru");
    const title = screen.getByText("Our Team");
    const subTitle = screen.getByText(
      "G.O.D.S. (Gurus Of Developmental Skills)",
    );
    const membersCards = screen.getAllByRole("heading", { name: "Developer" });

    expect(title).toBeInTheDocument();
    expect(subTitle).toBeInTheDocument();
    expect(membersCards.length).toEqual(3);

    await fireEvent.click(langSwither);

    expect(title.innerHTML).toEqual("Наша команда");
  });

  test("Render herro-banner section", async () => {
    const langSwither = screen.getByText("ru");
    const title = screen.getByText("G...QL");
    const subTitle = screen.getByText(
      "GraphiQL is a playground/IDE for graphQL requests.",
    );
    const CTA = screen.getByRole("button", { name: "Get started" });

    expect(title).toBeInTheDocument();
    expect(subTitle).toBeInTheDocument();
    expect(CTA).toBeInTheDocument();

    await fireEvent.click(langSwither);

    expect(subTitle.innerHTML).toEqual(
      "GraphiQL - это playground/IDE для graphQL запросов.",
    );
    expect(CTA.innerHTML).toEqual("Начать");

    await fireEvent.click(CTA);
  });
});
