import { useState } from "react";
import { ImageList } from "@mui/material";
import { ImagenItem, ImagenModal } from "../../atoms";
import { IImageListGallery } from "./IImageListGallery";

export const ImageListGallery = ({ dataImage }: IImageListGallery) => {
	const [open, setOpen] = useState(false);
	const [item, setItem] = useState({
		title: "",
		img: "",
		author: "",
	});

	return (
		<>
			<ImageList cols={3} gap={20} variant="masonry">
				{dataImage.map((data, index) => (
					<ImagenItem
						key={index}
						data={data}
						setOpen={setOpen}
						setItem={setItem}
					/>
				))}
			</ImageList>
			<ImagenModal open={open} handleClose={() => setOpen(false)} item={item} />
		</>
	);
};
