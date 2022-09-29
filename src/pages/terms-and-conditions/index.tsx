import { NextPage } from "next";
import { ContentPaper, Section, TitleSection } from "../../components/atoms";
import { AppLayout } from "../../components/templates";
import { dataTermsAndConditions, typeText } from "../../data/dataTermsAndConditions";

const TermsAndConditionsPage: NextPage = () => {
    return (
        <>
            <AppLayout
                title='Terms and Conditions'
                description='Some of the projects carried out and in which I participated'
                page='/terms-and-conditions'
            >
                <Section>
                    <ContentPaper>
                        <TitleSection
                            align="justify"
                            title="Terms and Conditions"
                            description={dataTermsAndConditions}
                            descriptionTitle={typeText}
                        />
                    </ContentPaper>
                </Section>

            </AppLayout >
        </>
    )
}

export default TermsAndConditionsPage;
