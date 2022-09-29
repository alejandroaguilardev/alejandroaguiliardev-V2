import { Grid, Typography, Box } from "@mui/material"
import { titleData } from "./data";
import { LottieOptions } from "../";
import heroJson from '../../../../public/json/hero.json';

export const Hero = () => {
  return (
    <Grid
      container
      direction='column'
      sx={{
        background: 'url(/img/pattern.svg) no-repeat',
        justifyContent: "center",
        height: 'calc(100vh - 80px)'
      }}
    >
      <Box>
        {
          titleData.map((data) => (
            <Typography
              key={data.title}
              align='center'
              variant={data.variant === "h1" ? "h1" : "h6"}
              sx={{
                display: 'block',
                color: data.color,
                fontSize: data.fontSize,
                fontWeight: data.fontWeight,
                marginBottom: data.marginBottom
              }}>
              {data.title}
            </Typography>
          ))
        }
      </Box>
      <LottieOptions data={heroJson} />
    </Grid>
  );
}
