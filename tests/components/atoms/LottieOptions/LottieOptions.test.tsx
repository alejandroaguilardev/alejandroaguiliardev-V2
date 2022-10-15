import { render, screen } from "@testing-library/react";
import { LottieOptions } from "../../../../src/components/atoms/LottieOptions/LottieOptions";



describe("LottieOptions", () => {
	test("toMacthSnapShot", () => {
		const { container } = render(
			<LottieOptions data={{}} loop={true} autoplay={false} />
		);
		expect(container).toMatchSnapshot();
		expect(screen.getByText("Lottie")).toBeTruthy();
	});
});
