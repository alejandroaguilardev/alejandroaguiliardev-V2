import { render, screen } from "@testing-library/react";
import { About } from "../../../../src/components/organisms";

describe("About Test", () => {
	test("toMacthSnapShot", () => {
		const { container } = render(<About />);

		expect(container).toMatchSnapshot();
		expect(screen.getByText("About me")).toBeTruthy();
	});
});
