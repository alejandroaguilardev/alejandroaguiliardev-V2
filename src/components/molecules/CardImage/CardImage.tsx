import Image from "next/image";
import { Box } from "@mui/material";
import { ICardImage } from "./ICardImage";
import { MyButton, Overlay } from "../../atoms";

export const CardImage = ({
	title,
	icon,
	size,
	link = "",
	repository = "",
}: ICardImage) => {
	return (
		<Box
			position="relative"
			sx={{
				display: "flex",
				justifyContent: "center",
				mb: size === "large" ? 2 : 2,
				height: size === "large" ? "17rem" : "auto",
				width: "100%",
			}}
		>
			<Image
				src={icon}
				width={size === "small" ? 70 : 100}
				height={size === "small" ? 70 : 100}
				alt={title}
				layout={size === "large" ? "fill" : "intrinsic"}
			/>
			{size === "large" && (
				<Overlay>
					<>
						{!!link && (
							<a href={link} target="_blank" rel="”noopener noreferrer" role="link">
								<MyButton text="Link Web" />
							</a>
						)}

						<a href={repository} target="_blank" rel="”noopener noreferrer" role="repository">
							<MyButton text="Repository" />
						</a>
					</>
				</Overlay>
			)}
		</Box>
	);
};
