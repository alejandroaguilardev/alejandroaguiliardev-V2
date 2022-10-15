import { fireEvent, render, screen } from "@testing-library/react";
import { Mode } from "../../../../src/components/atoms/Mode/Mode";
import { INIT } from "../../../../src/context/mode/init";
import { ModeContext } from "../../../../src/context/mode/ModeContext";

describe("Mode test", () => {
	test("toMacthSnapshot", () => {
		const mockHandleTheme = jest.fn();
		const { container } = render(
			<ModeContext.Provider
				value={{ theme: INIT, handleTheme: mockHandleTheme }}
			>
				<Mode />
			</ModeContext.Provider>
		);
		const btn = screen.getByLabelText("icon-mode");
		fireEvent.click(btn);

		expect(container).toMatchSnapshot();
		expect(mockHandleTheme).toHaveBeenCalledWith("dark")
	});
});
