import Image from "next/image"
import Link from "next/link";
import { Typography, Grid } from "@mui/material"
import { ILogotype } from "./ILogotype";

export const Logotype = ({ ligth = false }: ILogotype) => {
    return (
        <Link href="/">
            <a>
                <Grid sx={{ display: 'flex', alignItems: 'center' }}>
                    <Image
                        src={`${ligth ? '/img/alejandro-aguilar-dev-white.svg' : '/img/alejandro-aguilar-dev.svg'}`}
                        width={50}
                        height={50}
                        alt='Logo Alejandro Aguilar'

                    />
                    <Typography
                        noWrap
                        sx={{
                            mr: 2,
                            fontWeight: 700,
                            letterSpacing: '.2rem',
                            textDecoration: 'none',
                            color: `${ligth ? 'primary.contrastText' : 'text.primary'}`

                        }}
                    >
                        ALEJANDRO AGUILAR
                    </Typography>
                </Grid>
            </a>
        </Link>
    )
}
