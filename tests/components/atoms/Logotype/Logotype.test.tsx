import { render } from "@testing-library/react";
import { Logotype } from "../../../../src/components/atoms/Logotype/Logotype";

describe("Logotype", () => {
	test("toMathSnapshot", () => {
		const { container } = render(<Logotype />);
		expect(container).toMatchSnapshot();
	});
});
