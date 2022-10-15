import { render, screen } from "@testing-library/react";
import { Skills } from "../../../../src/components/organisms/Skills/Skills";

describe("Skills Test", () => {
	const title = "title";
	const description = "description";
	const dataSkills = [
		{
			title: "data title",
			subtitle: "data subtitle",
			description: "data description",
			icon: "/img/banner.jpg",
		},
	];
	test("toMatchSnapshot", () => {
		const { container } = render(
			<Skills title={title} description={description} dataSkills={dataSkills} />
		);
		expect(container).toMatchSnapshot();
		expect(screen.findByText(title)).toBeTruthy();
		expect(screen.findByText(description)).toBeTruthy();
		expect(screen.findByText(dataSkills[0].title)).toBeTruthy();
	});
});
