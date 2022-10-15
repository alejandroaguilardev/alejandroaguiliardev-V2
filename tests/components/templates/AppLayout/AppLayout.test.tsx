import { render, screen } from "@testing-library/react";
import { AppLayout } from "../../../../src/components/templates/AppLayout/AppLayout";

jest.mock("../../../../src/components/atoms/Mode/Mode");
jest.mock("../../../../src/components/atoms/PageRoute/PageRoute");

describe("AppLayout Test", () => {
	const title: string = "title";
	const description: string = "description";
	const page: string = "page";

	test("toMatchSnapshot", () => {
		const { container } = render(
			<AppLayout title={title} description={description} page={page}>
				<h1 role="app-layout">AppLayout</h1>
			</AppLayout>
		);
        const appLayaout = screen.getByRole("app-layout");

		expect(container).toMatchSnapshot();
		expect(appLayaout.innerHTML).toBe("AppLayout");
	});
});
