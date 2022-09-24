const style = {
	cursor: "pointer",
	height: "3rem",
	margin: "0 0 1px 0",
	padding: "0",
	transition: ".5s all",
	"&:hover": {
        marginLeft: "-11rem"
	},
};

export const dataNetworks = [
	{
		href: "https://twitter.com/alejandroagdev/",
		title: "Twitter",
		text: "follow us on twitter",
		style: {
			...style,
			top: "50%",
			backgroundColor: "#3A559F",
		},
	},
	{
		href: "https://www.instagram.com/alejandroaguilar.dev/",
		title: "Instagram",
		text: "Meet us on Instagram",
		style: {
			...style,
			top: "55%",
			backgroundColor: "#C536A4",
		},
	},
	{
		href: "https://www.linkedin.com/in/alejandro-aguilar-879402153/",
		title: "LinkedIn",
		text: "Let's work on Linkedin",
		style: {
			...style,
			top: "60%",
			backgroundColor: "#2666B2",
		},
	},
	{
		href: "https://github.com/alejandroaguilardev/",
		title: "GitHub",
		text: "Check my Repositories",
		style: {
			...style,
			top: "65%",
			backgroundColor: "#212121",
		},
	},
];
