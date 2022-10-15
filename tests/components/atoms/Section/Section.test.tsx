import { render, screen } from '@testing-library/react';
import { Section } from '../../../../src/components/atoms/Section/Section';

describe("Section", ()=> {
    test("toMacthSnapshot", ()=>{ 
        const {container} = render(<Section>
            <h1>Section</h1>
        </Section>)

        expect(container).toMatchSnapshot();
        expect(screen.getByText("Section")).toBeTruthy();
    })
})