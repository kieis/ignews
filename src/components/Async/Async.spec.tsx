import { render, screen, waitFor } from "@testing-library/react";
import { Async } from ".";

test("it renders correctly", async () => {
  render(<Async />);

  expect(screen.getByText("Hello World")).toBeInTheDocument();
  //expect(await screen.findByText("button")).toBeInTheDocument(); //find is async
  //waitForElementToBeRemoved(screen.queryByText("button")) // check if isn't on screen
  await waitFor(() => {
    return expect(screen.queryByText("button")).toBeInTheDocument();
    //return expect(screen.findByText("button")).not.toBeInTheDocument(); //check if isn't on screen
  });
});
