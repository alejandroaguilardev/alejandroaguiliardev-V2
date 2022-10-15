import { render } from "@testing-library/react";
import { ContainerSocialNetworks } from "../../../../src/components/organisms/ContainerSocialNetworks/ContainerSocialNetworks";

describe("ContainerSocialNetworks Test", () => {
	test("toMacthSnapshot", () => {
		const { container } = render(<ContainerSocialNetworks />);
		expect(container).toMatchSnapshot();
	});
});
