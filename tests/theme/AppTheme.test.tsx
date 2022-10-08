import React from "react";
import { render, screen } from '@testing-library/react';
import { AppTheme } from "../../src/theme/AppTheme";



describe("AppTheme test", () => {

	test("AppTheme SnapShots", () => {
		const { container } = render(
			<AppTheme>
				<h1>AppTheme</h1>
			</AppTheme>
		);

		expect(container).toMatchSnapshot();
		expect(screen.getByText("AppTheme")).toBeTruthy(); 
	});
});
