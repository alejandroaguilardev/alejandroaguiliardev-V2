import { render, screen } from "@testing-library/react";
import { ListOption } from "../../../../src/components/atoms/ListOption/ListOption";

describe("ListOption", () => {
	const list = [
		{ title: "title one", secondary: "second Text" },
		{ title: "title SecondZ", secondary: "", type: "link" },
	];
	test("toMatchSnapshot ", () => {
		const { container } = render(<ListOption title="Title test" list={list} />);
		expect(container).toMatchSnapshot();
	});

	test("Props ", () => {
		render(<ListOption title="Title test" list={list} />);

		expect(screen.findByText(list[0].title)).toBeTruthy();
		expect(screen.findByText(list[0].secondary)).toBeTruthy();
		expect(screen.findByText(list[1].title)).toBeTruthy();
	});
});
