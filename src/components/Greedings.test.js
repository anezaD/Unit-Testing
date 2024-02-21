import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeding from "./Greedings";

//Describe is a suite
describe("Components of Greedings", () => {
  test("render Hello World as text", () => {
    //Arrange
    render(<Greeding />);

    //Act
    //...Nothing

    //Assert
    const helloWorldConst = screen.getByText("Hello World", { exact: true });
    expect(helloWorldConst).toBeInTheDocument();
  });

  test('render "This is Aneza" when button Clicked', () => {
    render(<Greeding />);

    //act
    const pushButton = screen.getByRole("button");
    userEvent.click(pushButton);

    const anezaIsHereElement = screen.getByText("This is Aneza");
    expect(anezaIsHereElement).toBeInTheDocument();
  });

  test('render "Not Clicked" when button not clicked', () => {
    render(<Greeding />);

    const clickedElement = screen.getByText("Clicked", { exact: false });
    expect(clickedElement).toBeInTheDocument();
  });

  test('not render "Not Clicked" if when button clicked', () => {
    render(<Greeding />);

    //act
    const pushButton = screen.getByRole("button");
    userEvent.click(pushButton);
    const notShowWhenClicked = screen.queryByText("Clicked", { exact: false }); // so it gives null and not false because the
    expect(notShowWhenClicked).toBeNull();
  });
});
