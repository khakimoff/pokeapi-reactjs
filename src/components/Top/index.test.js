import React from "react";
import Top from "./index";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<Top />).toJSON();
  expect(tree).toMatchSnapshot();
});
