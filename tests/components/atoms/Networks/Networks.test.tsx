import { render, screen } from "@testing-library/react";
import { Networks } from "../../../../src/components/atoms/Networks/Networks";

describe("Networks Test", () => {
	const title: string = "title Test";
	const text: string = "text Test";
	const fab: boolean = true;
	test("toMatchSnapshot", () => {
		const { container } = render(
			<Networks title={title} text={text} fab={fab}>
				Networks
			</Networks>
		);
		expect(container).toMatchSnapshot();
		expect(screen.getByText("Networks")).toBeTruthy();
	});

	test("Props", () => {
		render(
			<Networks title={title} text={text} fab={false}>
				Networks
			</Networks>
		);
		expect(screen.getByText(text)).toBeTruthy();
	});
});
