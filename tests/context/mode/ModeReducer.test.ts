import { INIT } from "../../../src/context/mode/init";
import { ModeReducer, TAction } from "../../../src/context/mode/ModeReducer";

describe("ModeReducer Test", () => {
	test("return state of default", () => {
		expect(INIT.mode).toBe("light");
	});

	test("action changeMode", () => {
		const action: TAction = {
			type: "changeMode",
			payload: {
				mode: "dark",
			},
		};
		const reducer = ModeReducer(INIT, action);

		expect(reducer.mode).toBe(action.payload.mode);
	});
});
