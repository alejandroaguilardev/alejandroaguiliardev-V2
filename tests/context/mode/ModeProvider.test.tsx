import { fireEvent, render, screen } from "@testing-library/react";
import { Mode } from "../../../src/components/atoms/Mode/Mode";
import { ModeContext } from "../../../src/context/mode/ModeContext";

describe("ModeProvider Test", () => {
	test("handleTheme test", () => {
		const theme = { mode: "dark" };
		const mockHandleTheme = jest.fn();

		render(
			<ModeContext.Provider value={{ theme, handleTheme: mockHandleTheme }}>
				<Mode />
			</ModeContext.Provider>
		);

		const button = screen.getByLabelText("icon-mode");
		fireEvent.click(button);


		expect(mockHandleTheme).toHaveBeenCalled(); 
		
	});
});
