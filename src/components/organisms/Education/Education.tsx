
import { ContentPaper, TitleSection } from "../../atoms";
import { ImageListGallery } from "../../molecules/ImageListGallery/ImageListGallery";
import { dataGalleryEducation } from "../../../data/dataGalleryEducation";

const data = [
    'I am a graduated SYSTEMS ENGINEER Polytechnic University Institute "Santiago Marino" of Valencia Carabobo in 2019.',
    'Also, I have taken multiple courses on platforms such as Edteam, SoloLearn, Udemy and Cisco. But mainly I tend to lean towards seeing various free content such as video tutorials on free streaming platforms such as YouTube and Live that I usually reinforce with the documentation of the technology.'
]

export const Education = () => {
    return (
        <ContentPaper>
            <TitleSection
                title="Courses and Certificates"
                description={data}
            />

            <ImageListGallery dataImage={dataGalleryEducation} />

        </ContentPaper>
    )
}
