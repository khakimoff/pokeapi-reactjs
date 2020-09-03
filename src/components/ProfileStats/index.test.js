import React from "react";
import ProfileStats from "./index";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<ProfileStats />).toJSON();
  expect(tree).toMatchSnapshot();
});
