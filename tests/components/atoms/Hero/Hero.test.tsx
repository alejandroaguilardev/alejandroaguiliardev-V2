import { Hero } from "../../../../src/components/atoms/Hero/Hero";
import { render } from "@testing-library/react";

jest.mock("lottie-react",()=>({
    useLottie: (options={})=>({View:<h1>Lottie</h1>})
}))

describe("Hero Test", () => {
	test("Hero snapshot", () => {
		const { container } = render(<Hero />);
		expect(container).toMatchSnapshot();
	});
});
