import React from "react";
import ModalImage from "./ModalImage";
import { render } from "@testing-library/react";

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<ModalImage />, div);
});
