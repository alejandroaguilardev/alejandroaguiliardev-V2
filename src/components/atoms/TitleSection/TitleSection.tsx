import { Box, Typography } from "@mui/material";
import { ITitleSection } from "./ITitleSection";

export const TitleSection = ({
	align = "center",
	title,
	description,
	descriptionTitle = [],
}: ITitleSection) => {
	return (
		<Box mb={4}>
			<Typography
				role="title"
				mb={1}
				variant="h2"
				align="center"
				sx={{
					fontSize: "2rem",
					fontWeight: "bold",
				}}
			>
				{title}
			</Typography>
			{description.map((text, index) => (
				<Typography
					role="description"
					align={align}
					key={text}
					mb={2}
					sx={{
						fontWeight: !!descriptionTitle[index] ? "bold" : "normal",
					}}
				>
					{text}
				</Typography>
			))}
		</Box>
	);
};
