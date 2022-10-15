import { render } from "@testing-library/react";
import { MenuResponsive } from "../../../../src/components/molecules/MenuResponsive/MenuResponsive";

jest.mock("../../../../src/components/atoms/PageRoute/PageRoute");
jest.mock("../../../../src/components/atoms/Mode/Mode");

describe("MenuResponsive Test", () => {
	const pages = ["page 1", "page 2"];
	const menu = true;

	test("toMacthSnapshot", () => {
		const { container } = render(<MenuResponsive pages={pages} menu={menu} />);

		expect(container).toMatchSnapshot();
	});
});
