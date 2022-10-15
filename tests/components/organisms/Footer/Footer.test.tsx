import { render, screen } from "@testing-library/react";
import { Footer } from "../../../../src/components/organisms";

describe("Footer Test", () => {
	test("toMatchSnapshot", () => {
		const { container } = render(<Footer />);

		expect(container).toMatchSnapshot();
		expect(screen.getByText("ALEJANDRO AGUILAR")).toBeTruthy();
		expect(screen.getByText("ALEJANDRO AGUILAR")).toBeTruthy();
	});
});
