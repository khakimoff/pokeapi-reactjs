import React from "react";
import ProfileMain from "./index";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<ProfileMain />).toJSON();
  expect(tree).toMatchSnapshot();
});
