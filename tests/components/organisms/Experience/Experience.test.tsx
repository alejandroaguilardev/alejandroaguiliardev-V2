import { render, screen } from "@testing-library/react";
import { Experience } from "../../../../src/components/organisms/Experience/Experience";

describe("Experience", () => {
	test("toMatchSnapshot", () => {
		const { container } = render(<Experience />);

		expect(container).toMatchSnapshot();
        expect(screen.getByText("My Work Experience")).toBeTruthy();
        expect(screen.getByText("DEVELOPER FRONT END")).toBeTruthy();
	});
});
