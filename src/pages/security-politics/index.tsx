import { NextPage } from "next";
import { ContentPaper, Section, TitleSection } from "../../components/atoms";
import { AppLayout } from "../../components/templates";
import { dataSecurityPolitics, typeText } from "../../data/dataSecurityPolitics";

const SecurityPoliticsPage: NextPage = () => {
    return (
        <>
            <AppLayout
                title='Security politics'
                description='Some of the projects carried out and in which I participated'
                page='/security-politics'
            >
                <Section>
                    <ContentPaper>
                        <TitleSection
                            align="justify"
                            title="Security politics"
                            description={dataSecurityPolitics}
                            descriptionTitle={typeText}
                        />
                    </ContentPaper>
                </Section>

            </AppLayout >
        </>
    )
}

export default SecurityPoliticsPage;
