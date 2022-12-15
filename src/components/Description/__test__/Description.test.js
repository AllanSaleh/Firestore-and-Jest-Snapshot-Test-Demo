import renderer from "react-test-renderer";
import { Description } from "../Description";

test("Description component renders correctly", () => {
  const tree = renderer.create(<Description />).toJSON();
  expect(tree).toMatchSnapshot();
});
