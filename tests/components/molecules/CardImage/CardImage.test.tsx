import { render, screen, getByRole } from "@testing-library/react";
import { CardImage } from "../../../../src/components/molecules";

describe("CardImage Test", () => {
	const title = "title Test";
	const icon = "/img/banner.jpg";
	const size = "large";
	const link = "link";
	const repository = "repository";

	test("toMacthSnapshot", () => {
		const { container } = render(
			<CardImage
				title={title}
				icon={icon}
				size={size}
				link={link}
				repository={repository}
			/>
		);
		expect(container).toMatchSnapshot();
	});

	test("toMacthSnapshot", () => {
		render(
			<CardImage
				title={title}
				icon={icon}
				size={size}
				link={link}
				repository={repository}
			/>
		);

		const linkRole = screen.getByRole("link");
		const repositoryRole = screen.getByRole("repository");
		
		expect(linkRole.getAttribute("href")).toBe(link);
		expect(repositoryRole.getAttribute("href")).toBe(repository); 
	});
});
