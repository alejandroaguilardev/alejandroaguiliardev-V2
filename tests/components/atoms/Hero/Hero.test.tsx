import { Hero } from "../../../../src/components/atoms/Hero/Hero";
import { render } from "@testing-library/react";



describe("Hero Test", () => {
	test("Hero snapshot", () => {
		const { container } = render(<Hero />);
		expect(container).toMatchSnapshot();
	});
});
