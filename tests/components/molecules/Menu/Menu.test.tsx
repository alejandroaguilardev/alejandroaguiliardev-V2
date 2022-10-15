import { render, screen } from "@testing-library/react";
import { Menu } from "../../../../src/components/molecules/Menu/Menu";

jest.mock("../../../../src/components/atoms/PageRoute/PageRoute");
jest.mock("../../../../src/components/atoms/Mode/Mode");

describe("Menu Test", () => {
	const pages = ["page 1", "page 2"];
	const menu = true;
	const setMenu = jest.fn();

	test("toMacthSnapshot", () => {
		const { container } = render(
			<Menu pages={pages} menu={menu} setMenu={setMenu} />
		);

		expect(container).toMatchSnapshot();
	});
});
