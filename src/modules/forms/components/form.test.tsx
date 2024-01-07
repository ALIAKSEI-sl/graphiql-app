import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Login from "./LoginForm";
import { Provider } from "react-redux";
import { setupStore } from "../../../store/store";
import { LocalizationProvider } from "../../../localization/LocalizationProvider";
import Registration from "./RegistrationForm";

describe("LoginForm", () => {
  test("renders Login component", async () => {
    render(
      <Provider store={setupStore()}>
        <LocalizationProvider>
          <Login />
        </LocalizationProvider>
      </Provider>,
    );
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
    const inputEmail = screen.getByLabelText("email:");
    await fireEvent.change(inputEmail, { target: { value: "test@test.com" } });
    const inputPassword = screen.getByLabelText("password:");
    await fireEvent.change(inputPassword, { target: { value: "Qwerty!1" } });
    await fireEvent.click(screen.getByRole("button", { name: "Login" }));
    expect(loginButton).toBeInTheDocument();
  });
});

describe("RegistrationForm", () => {
  test("renders Registration component", () => {
    render(
      <Provider store={setupStore()}>
        <LocalizationProvider>
          <Registration />
        </LocalizationProvider>
      </Provider>,
    );
    const loginButton = screen.getByRole("button", { name: "Registration" });
    expect(loginButton).toBeInTheDocument();
  });
});
