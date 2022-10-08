import { render } from "@testing-library/react";
import { ImagenItem } from "../../../../src/components/atoms/ImagenItem/ImagenItem";

describe("ImagenItem test", () => {
	const data = {
		img: "/img/alejandro-aguilar-dev.svg",
		title: "A title",
		author: "Alejandro",
	};

	test("ImagenItem Snapshot", () => {
		const mockSetOpen = jest.fn();
		const mocksetItem = jest.fn();

		const { container } = render(
			<ImagenItem data={data} setOpen={mockSetOpen} setItem={mocksetItem} />
		);

		expect(container).toMatchSnapshot();
	});

	// test("ImagenItem Props", () => {
	// 	render(
	// 		<ImagenItem data={data} setOpen={mockSetOpen} setItem={mocksetItem} />
	// 	);
	// });
});
