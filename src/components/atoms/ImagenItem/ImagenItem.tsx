import Image from "next/image";
import { ImageListItem, ImageListItemBar, IconButton } from "@mui/material"
import InfoIcon from '@mui/icons-material/Menu';
import { IImagenItem } from "./IImagenItem";

export const ImagenItem = ({ data,  setOpen,  setItem }: IImagenItem) => {
    return (
        <ImageListItem
            key={data.img}
            onClick={() => { setOpen(true); setItem({ ...data }) }}
        >
            <Image
                src={data.img}
                alt={data.title}
                width={400}
                height={300}
            />
            <ImageListItemBar
                title={data.title}
                subtitle={data.author}
                actionIcon={
                    <IconButton
                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                        aria-label={`info about ${data.title}`}
                    >
                        <InfoIcon />
                    </IconButton>
                }
            />
        </ImageListItem>
    )
}
