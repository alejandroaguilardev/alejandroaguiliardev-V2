import { render, screen } from "@testing-library/react";
import { Projects } from "../../../../src/components/organisms";


describe("Project Test", () => {
	const title = "Project";
	const description = "description Project";

	test("toMatchSnapshot", () => {
		const { container } = render(
			<Projects title={title} description={description} dataProjects={[]} />
		);

		expect(container).toMatchSnapshot();
		expect(screen.getByText(title)).toBeTruthy();
		expect(screen.getByText(description)).toBeTruthy();
	});
});
