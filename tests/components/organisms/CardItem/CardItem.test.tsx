import { render, screen } from "@testing-library/react";
import { CardItem } from "../../../../src/components/organisms/CardItem/CardItem";

describe("CardItem Test", () => {
	const title = "title";
	const subtitle = "subtitle";
	const description = "titdescriptione";
	const icon = "/img/banner";

	test("toMacthSnapshot", () => {
		const { container } = render(
			<CardItem
				title={title}
				subtitle={subtitle}
				description={description}
				icon={icon}
			/>
		);

		expect(container).toMatchSnapshot();
		expect(screen.getByText(title)).toBeTruthy();
		expect(screen.getByText(subtitle)).toBeTruthy();
		expect(screen.getByText(description)).toBeTruthy();
	});
});
