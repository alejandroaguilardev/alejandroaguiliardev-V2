import Link from "next/link";
import { useRouter } from "next/router";
import { IPage } from "./IPageRoute";
import { Typography } from "@mui/material"
import { useThemeContext } from "../../../context";
import { useMemo } from "react";

export const PageRoute = ({ page, sx = {} }: IPage) => {
    const router = useRouter();
    const { theme } = useThemeContext();

    const memoColor = useMemo(() => theme.mode ? "#fff" : "#000", [theme.mode])


    return (
        <Link href={`/${page.toLocaleLowerCase()}`}>
            <a>
                <Typography
                    sx={{
                        ...sx,
                        color: `${router.pathname === `/${page.toLocaleLowerCase()}` ? 'primary.main' : memoColor}`
                    }}>
                    {page}
                </Typography>
            </a>
        </Link>
    )
}
