// import '@testing-library/jest-dom/extend-expect'
import React from 'react';

jest.mock("./src/context/index", () => ({
	useThemeContext: () => ({ theme: { mode: "dark" } }),
}));

jest.mock("lottie-react", () => ({
	useLottie: (options) => ({ View: <h1>Lottie</h1> }),
}));
