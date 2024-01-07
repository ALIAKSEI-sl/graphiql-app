import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export const showToastMessage = (
  message: string,
  color: "green" | "red",
): void => {
  const background =
    color === "green"
      ? "linear-gradient(to right, #00b09b, #96c93d)"
      : "linear-gradient(to right, #ff758c, #ff9900)";

  Toastify({
    text: message,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "bottom",
    position: "right",
    style: {
      background,
    },
  }).showToast();
};
