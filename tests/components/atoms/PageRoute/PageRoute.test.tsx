import { PageRoute } from "../../../../src/components/atoms/PageRoute/PageRoute";
import { render, screen } from "@testing-library/react";
import { ModeContext } from "../../../../src/context/mode/ModeContext";
import { INIT } from "../../../../src/context/mode/init";

jest.mock("next/router", () => ({
	useRouter: () => ({ pathname: "pathname" }),
}));

describe("Page Route Test", () => {
	test("toMacthSnapshot", () => {
		const page = "Page Test";
		const mockHandleTheme = jest.fn();

		const { container } = render(
			<ModeContext.Provider
				value={{ theme: INIT, handleTheme: mockHandleTheme }}
			>
				<PageRoute page={page} />
			</ModeContext.Provider>
		);

		expect(container).toMatchSnapshot();
		expect(screen.getByText(page)).toBeTruthy();
	});
});
