import React from "react";
import main from "../index.js";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const rendered = renderer.create(<main />).toJSON();
  expect(rendered).toBeTruthy();
});
