import { render, screen } from '@testing-library/react';
import { Overlay } from '../../../src/components/atoms/Overlay/Overlay';
describe("Overlay Test", ()=> {
    test("toMacthSnapshot", () => {
        const {container} = render(<Overlay>
            <h1>Overlay</h1>
        </Overlay>)
        expect(container).toMatchSnapshot();
        expect(screen.getByText("Overlay")).toBeTruthy();
    })
})