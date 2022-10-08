import { render, screen } from "@testing-library/react";
import { ContentPaper } from "../../../../src/components/atoms/ContentPaper/ContentPaper";

describe("ContentPaper Test", () => {
	test("Snapshots", () => {
		const { container } = render(
			<ContentPaper>
				<h1>ContentPaper</h1>
			</ContentPaper>
		);

		expect(container).toMatchSnapshot();
		expect(screen.getByText("ContentPaper")).toBeTruthy();
	});
});
