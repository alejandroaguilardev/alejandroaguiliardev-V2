import { render, screen } from "@testing-library/react";
import { dataNetworks } from "../../../../src/components/molecules/SocialNetworks/dataNetworks";
import { SocialNetworks } from "../../../../src/components/molecules/SocialNetworks/SocialNetworks";

describe("SocialNetworks Test", () => {
	test("toMacthSnapshot", () => {
		const {container} = render(<SocialNetworks />);
        expect(container).toMatchSnapshot();
	});

	test("dataNetworks Elements", ()=> {
		 render(<SocialNetworks />)
        
		dataNetworks.forEach(data =>{
			expect(screen.getByText(data.text)).toBeTruthy();
		})
	})

	
});
