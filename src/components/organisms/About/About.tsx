import { Box, Grid } from "@mui/material"
import { ContentPaper, LottieOptions, TitleSection } from "../../atoms"
import heroJson from '../../../../public/json/hero.json';

const data = [
    "I am passionate about technology, I consider myself a responsible and transparent person always willing to collaborate and support, values ​​that I have learned and appreciated in my previous experiences.",
    "I have worked mainly as a web developer in various technologies,I have had experience in Front end and Back end, I also had the opportunity to work in blockchain developing smart contract.",
    "Also, I love to investigate and learn, because any new knowledge is welcome."

]

export const About = () => {
    return (
        <ContentPaper>
            <Grid container>
                <Grid item md={8}>
                    <TitleSection
                        title="About me"
                        description={data}
                        align="justify"
                    />
                </Grid>
                <Grid item md={4}>
                    <Box sx={{ margin:'auto'}}>
                        <Box sx={{ height: '16rem', width: '16rem' }}>
                            <LottieOptions data={heroJson} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ContentPaper>
    )
}
