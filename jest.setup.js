// import '@testing-library/jest-dom/extend-expect'

jest.mock("./src/context/index", () => ({
	useThemeContext: () => ({ theme: { mode: "dark" } }),
}));

