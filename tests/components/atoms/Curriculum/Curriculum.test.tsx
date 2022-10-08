import { Curriculum } from "../../../../src/components/atoms/Curriculum/Curriculum";
import { render, screen } from "@testing-library/react";

describe("Curriculum Test", () => {
	test("SnapShot", () => {
		const { container } = render(<Curriculum />);

		expect(container).toMatchSnapshot();
	});

	test("Curriculum Props", () => {
		render(<Curriculum text="this is Text" fullWidth sx={{ p: 2 }} />);
		const btn = screen.getByRole("button");

		expect(screen.getByText("this is Text")).toBeTruthy();
		expect(btn.classList).toContain("MuiButton-fullWidth");
	});
});
