import { render, screen } from "@testing-library/react";
import { Education } from "../../../../src/components/organisms/Education/Education";

describe("Education Test", () => {
	test("toMatchSnapshot", () => {
		const { container } = render(<Education />);
		expect(container).toMatchSnapshot();
		expect(screen.getByText("Courses and Certificates")).toBeTruthy();
	});
});
