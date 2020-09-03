import React from "react";
import ProfileInitial from "./index";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<ProfileInitial />).toJSON();
  expect(tree).toMatchSnapshot();
});
