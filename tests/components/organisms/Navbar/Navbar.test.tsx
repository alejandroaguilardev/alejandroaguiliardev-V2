import { render, screen } from '@testing-library/react';
import { Navbar } from '../../../../src/components/organisms/Navbar/Navbar';

jest.mock("../../../../src/components/atoms/PageRoute/PageRoute");
jest.mock("../../../../src/components/atoms/Mode/Mode");

describe("Navbar Test", () => {
    test("toMatchSnapshot", () => {
        const {container} = render(<Navbar/>);

        expect(container).toMatchSnapshot();
        expect(screen.getAllByText("ALEJANDRO AGUILAR")).toBeTruthy(); 
    });
})