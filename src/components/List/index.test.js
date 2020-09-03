import React from "react";
import List from "./index";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<List />).toJSON();
  expect(tree).toMatchSnapshot();
});
