import Link from "next/link";
import { useRouter } from "next/router";
import { IPage } from "./IPageRoute";
import { Typography } from "@mui/material"

export const PageRoute = ({ page, sx = {} }: IPage) => {
    const router = useRouter();

    return (
        <Link href={`/${page.toLocaleLowerCase()}`}>
            <a>
                <Typography sx={{ ...sx, color: `${router.pathname === `/${page.toLocaleLowerCase()}` ? 'primary.main' : '#000'}` }}>
                    {page}
                </Typography>
            </a>
        </Link>
    )
}
