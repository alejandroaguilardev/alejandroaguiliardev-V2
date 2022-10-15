import { getByRole, render, screen } from "@testing-library/react";
import { TitleSection } from "../../../../src/components/atoms/TitleSection/TitleSection";

describe("TitleSection", () => {
	const align = "right";
	const title = "title";
	const description = ["description 1 ", "Description 2"];
	const descriptionTitle = [true, false];

	test("toMacthSnapshot", () => {
		const { container } = render(
			<TitleSection title={title} description={description} />
		);

		expect(container).toMatchSnapshot();
	});

	test("Props Test", () => {
		render(
			<TitleSection
				align={align}
				title={title}
				description={description}
				descriptionTitle={descriptionTitle}
			/>
		);

		const h2 = screen.getByRole("title");
		const p = screen.getAllByRole("description");

		expect(h2.textContent).toContain(title);
		let i = 0;
		for (const element of p) {
			expect(element.textContent).toContain(description[i++]);
			expect(element.className).toContain(
				align[0].toUpperCase() + align.substring(1)
			);
		}
	});
});
