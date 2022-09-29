import { Grid, Container } from "@mui/material"
import { useThemeContext } from "../../../context";
import { IContentPaper } from "./IContentPaper"

export const ContentPaper = ({ children }: IContentPaper) => {
  const { theme } = useThemeContext();
  return (
    <Container maxWidth="lg">
      <Grid sx={{
        backgroundColor: 'background.paper',
        boxShadow: theme.mode === 'dark' ? '1px 1px 30px #263240' : '1px 1px 30px #ddd',
      }}
        px={10} py={10}
      >
        {children}
      </Grid>
    </Container>
  )
}
