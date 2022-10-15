import { render, screen } from "@testing-library/react";
import { ImageListGallery } from "../../../../src/components/molecules";

describe("ImageListGallery Test", () => {
	const data = [
		{ img: "/img/banner.jpg", title: "Title 1", author: "author 1" },
		{ img: "/img/banner.jpg", title: "Title 2", author: "author 2" },
	];

	test("toMacthSnapshot", () => {
		const { container } = render(<ImageListGallery dataImage={data} />);

		expect(container).toMatchSnapshot();
		expect(screen.getByText(data[1].title)).toBeTruthy();
		expect(screen.getByText(data[1].author)).toBeTruthy();
	});
});
