export const dataProjectType = (type: string) =>
	dateProjects.filter((data) => data.type === type);

export const dataProjectPriority = (priority: number) =>
	dateProjects.filter((data) => data.priority === priority);

export const dateProjects = [
	{
		title: "BRIEFCASE V2",
		type: "front",
		subtitle: "Nextjs, Typescript, Material Ui, atom design, Jest Test",
		description: "My Portfolio Version 2 (Version 1 was made in Laravel",
		icon: "/img/projects/briefcasev2.jpg",
		date: "2022",
		link: "https://alejandroaguilar.dev/",
		repository:
			"https://github.com/alejandroaguilardev/alejandroaguiliardev-V2",
		priority: 2,
	},

	{
		title: "JOURNAL",
		type: "front",
		description: "Practical project, on diary notes with CRUD with FIREBASE.",
		icon: "/img/projects/pjournal.jpg",
		subtitle: "React, Material Ui, Firebase, Jest",
		date: "2022",
		link: "https://zingy-daffodil-5577e5.netlify.app/",
		repository: "https://github.com/alejandroaguilardev/journal",
		priority: 1,
	},

	{
		title: "CLON NEFLIX",
		type: "front",
		description:
			"Realization of neflix clone with limited functions made in React",
		icon: "/img/projects/neflix-2.jpg",
		subtitle: "React, Firebase, styled-components",
		date: "2021",
		link: "https://elegant-almeida-ff380e.netlify.app/",
		repository: "https://github.com/alejandroaguilardev/clon-netflix",
		priority: 2,
	},

	// {
	// 	title: "BRIEFCASE V1",
	// 	type: "front",
	// 	description: "My Portfolio Version 2 (Version 1 was made in Laravel",
	// 	icon: "/img/projects/briefcasev1.jpg",
	// 	subtitle: "Nextjs, Typescript, Material Ui",
	// 	date: "2022",
	// 	link: "https://briefcasev1.alejandroaguilar.dev/",
	// 	repository: "https://github.com/alejandroaguilardev/Laravel-portfolio",
	// 	priority: 2,
	// },

	{
		title: "CAMI & VALE INDUSTRIAL",
		type: "front",
		description:
			"empresa dedicada a la comercializacion de valvulas, tuberias, conexiones de acero, empaquetaduras",
		icon: "/img/projects/camiyvaleindustrial.jpg",
		subtitle: "Laravel, Blade, adminlte",
		date: "2021",
		link: "https://camiyvaleindustrial.com/",
		repository: "https://github.com/alejandroaguilardev/camiyvale",
		priority: 2,
	},

	// {
	// 	title: "ALTA  MODA",
	// 	type: "front",
	// 	description:
	// 		"Ecommerce of a Peruvian company dedicated to textile marketing",
	// 	icon: "/img/projects/altamoda.jpg",
	// 	subtitle: "Html, Css3, Js, PHP, Mysql, Culqi",
	// 	date: "2020",
	// 	link: "https://altamoda.alejandroaguilar.dev/",
	// 	repository: "https://github.com/alejandroaguilardev/ecommerce",
	// 	priority: 1,
	// },

	// {
	// 	title: "Inticoin",
	// 	type: "front",
	// 	description: "Design web crypto",
	// 	icon: "/img/projects/inticoin.jpg",
	// 	subtitle: "Html, Js, Php, Design, Template",
	// 	date: "2020",
	// 	link: "https://inticoin.alejandroaguilar.dev/dafft-en-linea/",
	// 	repository: "https://github.com/alejandroaguilardev/Inticoin",
	// 	priority: 2,
	// },

	//BackEnd

	{
		title: "Calendar Events",
		type: "backend",
		description:
			"Administrator made in native PHP, which allows uploading medical records in pdf",
		icon: "/img/projects/backend.png",
		subtitle: "Nodejs, Express, MongoDb ",
		date: "2022",
		link: "",
		repository: "https://github.com/alejandroaguilardev/express-calendar",
		priority: 2,
	},

	{
		title: "Contract NFT",
		type: "backend",
		description: "Erc721 token connecting to Moonriver router",
		icon: "/img/projects/backend.png",
		subtitle: "Solidity, Truffle ",
		date: "2022",
		link: "",
		repository: "https://github.com/alejandroaguilardev/task-list-truffle",
		priority: 1,
	},

	{
		title: "Ubigeo Peru",
		type: "backend",
		description: "Webservice to obtain the ubigeo of Péru ",
		icon: "/img/projects/backend.png",
		subtitle: "Lumen, PHP, MYSQL",
		date: "2020",
		link: "",
		repository: "https://github.com/alejandroaguilardev/Lumen-Ubigeo",
		priority: 2,
	},

	{
		title: "Clinic History upload File",
		type: "backend",
		description:
			"Administrator made in native PHP, which allows uploading medical records in pdf",
		icon: "/img/projects/dafft.jpg",
		subtitle: "PHP Native, MVC, MYSQL",
		date: "2020",
		link: "",
		repository:
			"https://github.com/alejandroaguilardev/Php-Sistema-de-Consulta-Clinica-",
		priority: 2,
	},
];
