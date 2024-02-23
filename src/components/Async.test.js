import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Async from "./Async";

describe("Async Calls", () => {
  test("render posts if request proceed", async () => {
    window.fetch = jest.fn(); // fn creates a mock function
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 12, title: "test" }], //.json() in our code and the array of json data
    }); // mockResolveValueOnce set avalue this fetch function should resolve.

    render(<Async />);
    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
