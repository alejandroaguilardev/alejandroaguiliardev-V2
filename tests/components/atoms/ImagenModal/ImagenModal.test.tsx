import { ImagenModal } from "../../../../src/components/atoms/ImagenModal/ImagenModal";
import { render, screen } from "@testing-library/react";

describe("ImagenModal", () => {
	const item = {
		img: "/img/banner.png",
		title: "title Img",
		author: "Alejandro Aguilar",
	};

	test("Snapchoks", () => {
		const { container } = render(
			<ImagenModal open={true} handleClose={() => jest.fn()} item={item} />
		);
		expect(container).toMatchSnapshot();
	});
	
});
