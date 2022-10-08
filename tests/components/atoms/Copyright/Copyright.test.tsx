import { Copyright } from "../../../../src/components/atoms/Copyright/Copyright";
import { render } from '@testing-library/react';

describe("Copyright test", () => {
	test("snapshots", () => {
		const { container } = render(<Copyright />);
		expect(container).toMatchSnapshot();
	});
});
