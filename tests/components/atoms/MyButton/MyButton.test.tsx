import { render, screen } from "@testing-library/react";
import { MyButton } from "../../../../src/components/atoms/MyButton/MyButton";

describe("MyButton Test", () => {
  const text = "Button Test";
  test("toMacthSnapshot", () => {
    const { container } = render(<MyButton text={text} />);

    expect(container).toMatchSnapshot();
  });

  test("Props ", () => {
    render(<MyButton text={text} />);

    expect(screen.getByText(text)).toBeTruthy();
  });

});
