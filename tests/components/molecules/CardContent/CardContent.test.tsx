import { render, screen } from "@testing-library/react";
import { CardContent } from "../../../../src/components/molecules/CardContent/CardContent";



describe("CardContent Test", () => {
	const title = "title Test";
	const subtitle = "subtitle Test";
	const description = "description Test";
	const icon = "/img/banner.jpg";
	const size = "large";
	const link = "link";
	const repository = "#";

	test("toMatchSnapshot", () => {
		const { container } = render(
			<CardContent
				title={title}
				subtitle={subtitle}
				description={description}
				icon={icon}
			/>
		);
		expect(container).toMatchSnapshot();
	});

	test("Props", () => {
		render(
			<CardContent
				title={title}
				subtitle={subtitle}
				description={description}
				icon={icon}
				size={size}
				link={link}
				repository={repository}
			/> 
		);
		screen.debug()
		expect(screen.findByText(title)).toBeTruthy();
		expect(screen.findByText(subtitle)).toBeTruthy();
		expect(screen.findByText(description)).toBeTruthy();
	});
});
