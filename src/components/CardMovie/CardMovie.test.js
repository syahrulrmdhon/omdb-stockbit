import React from "react";
import CardMovie from "./CardMovie";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const item = {
    Poster: "",
    Title: "",
    Year: "",
    Type: "",
    imdbID: "",
  };
  render(
    <BrowserRouter>
      <CardMovie item={item} />
    </BrowserRouter>,
    div
  );
});
