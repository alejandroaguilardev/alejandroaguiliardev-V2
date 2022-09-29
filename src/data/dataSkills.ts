export const dataSkillsPriority = (priority: number) =>
	skills.filter((data) => data.priority === priority);

export const dataSkillsType = (type: string) =>
	skills.filter((data) => data.type === type);

const skills = [
	//LANGUAJE
	{
		title: "JAVASCRIPT",
		subtitle: "",
		description: "I perform very well in this programming language.",
		icon: "/img/skills/javascript.svg",
		type: "Languaje",
		priority: 1,
	},
	{
		title: "TYPESCRIPT",
		subtitle: "",
		description: "Moderate experience in this programming language.",
		icon: "/img/skills/typescript.svg",
		type: "Languaje",
		priority: 1,
	},
	{
		title: "PHP",
		subtitle: "",
		description: "I perform very well in this programming language.",
		icon: "/img/skills/php.svg",
		type: "Languaje",
		priority: 1,
	},
	{
		title: "SOLIDITY",
		subtitle: "",
		description: "Programming language that I master to create smart contracts",
		icon: "/img/skills/solidity.svg",
		type: "Languaje",
		priority: 1,
	},
	{
		title: "JAVA",
		subtitle: "",
		description:
			"Little experience in this programming language practical exercises.",
		icon: "/img/skills/java.svg",
		type: "Languaje",
		priority: 3,
	},
	{
		title: "SQL",
		subtitle: "",
		description: "I perform very well in this programming language.",
		icon: "/img/skills/sql.svg",
		type: "Languaje",
		priority: 2,
	},

	{
		title: "VBA",
		subtitle: "",
		description: "Moderate experience in this programming language.",
		icon: "/img/skills/vba.svg",
		type: "Languaje",
		priority: 2,
	},

	//FRAMEWORK
	{
		title: "REACT",
		subtitle: "",
		description: "Main front end library I used Performed very well.",
		icon: "/img/skills/react.svg",
		type: "frontend",
		priority: 2,
	},
	{
		title: "NEXTJS",
		subtitle: "",
		description: "I perform very well in this Framework Front End",
		icon: "/img/skills/nextjs.svg",
		type: "frontend",
		priority: 1,
	},
	{
		title: "WEB3JS",
		subtitle:
			"Experience working with web3js for communication with smart contracts",
		description: "Librar.",
		icon: "/img/skills/web3js.svg",
		type: "frontend",
		priority: 2,
	},
	{
		title: "VUEJS",
		subtitle: "",
		description: "Moderate experience in this framework of Javascript",
		icon: "/img/skills/vuejs.svg",
		type: "frontend",
		priority: 2,
	},
	{
		title: "TAILWIND",
		subtitle: "",
		description: "Moderate experience in this framework CSS",
		icon: "/img/skills/tailwind.svg",
		type: "frontend",
		priority: 2,
	},

	{
		title: "BOOTSTRAP",
		subtitle: "",
		description: "Experience working with the bootstrap library.",
		icon: "/img/skills/bootstrap.svg",
		type: "frontend",
		priority: 2,
	},

	// {
	// 	title: "MATERIAL UI",
	// 	subtitle: "",
	// 	description: "Moderate experience working with this component library.",
	// 	icon: "/img/skills/material-ui.svg",
	// 	type: "frontend",
	// 	priority: 2,
	// },

	// {
	// 	title: "JQUERY",
	// 	subtitle: "",
	// 	description: "Experience working with the JQuery library.",

	// 	icon: "/img/skills/jquery.svg",
	// 	type: "frontend",
	// 	priority: 2,
	// },

	//Back end

	{
		title: "LARAVEL",
		subtitle: "",
		description: "I perform very well in this Framework Back End",
		icon: "/img/skills/laravel.svg",
		type: "backend",
		priority: 1,
	},
	{
		title: "LUMEN",
		subtitle: "",
		description: "Moderate experience in this framework of PHP",
		icon: "/img/skills/lumen.svg",
		type: "backend",
		priority: 2,
	},
	{
		title: "NODEJS EXPRESS",
		subtitle: "",
		description: "Experience working with Express performing FULL REST API",
		icon: "/img/skills/nodejs.svg",
		type: "backend",
		priority: 1,
	},
	// {
	// 	title: "SPRING BOOT",
	// 	subtitle: "",
	// 	description:
	// 		"Little experience in this programming language practical exercises.",
	// 	icon: "/img/skills/spring.svg",
	// 	type: "backend",
	// 	priority: 3,
	// },

	//DATABASE

	{
		title: "MONGODB",
		subtitle: "",
		description: "Better performance on this NOSQL database.",
		icon: "/img/skills/mongodb.svg",
		type: "backend",
		priority: 1,
	},
	{
		title: "MYSQL",
		subtitle: "",
		description: "Experience and Better performance in this SQL database.",
		icon: "/img/skills/mysql.svg",
		type: "backend",
		priority: 2,
	},
	{
		title: "SQLSERVER",
		subtitle: "",
		description: "Moderate experience in this SQL database.",
		icon: "/img/skills/sqlserver.svg",
		type: "backend",
		priority: 2,
	},
	// {
	// 	title: "POSTGRESQL",
	// 	subtitle: "",
	// 	description: "Moderate experience in this SQL database.",
	// 	icon: "/img/skills/postgresql.svg",
	// 	type: "backend",
	// 	priority: 3,
	// },

	// OTHER

	{
		title: "GIT",
		subtitle: "",
		description: "",
		icon: "/img/skills/git.svg",
		type: "tools",
		priority: 2,
	},

	{
		title: "APACHE",
		subtitle: "",
		description: "",
		icon: "/img/skills/apache.svg",
		type: "tools",
		priority: 3,
	},

	{
		title: "FIREBASE",
		subtitle: "",
		description: "",
		icon: "/img/skills/firebase.svg",
		type: "tools",
		priority: 3,
	},

	// {
	// 	title: "DOCKER",
	// 	subtitle: "",
	// 	description: "",
	// 	icon: "/img/skills/docker.svg",
	// 	type: "tools",
	// 	priority: 3,
	// },

	// {
	// 	title: "AWS",
	// 	subtitle: "",
	// 	description: "",
	// 	icon: "/img/skills/aws.svg",
	// 	type: "tools",
	// 	priority: 3,
	// },

	{
		title: "SOCKET",
		subtitle: "",
		description: "",
		icon: "/img/skills/socket.svg",
		type: "tools",
		priority: 3,
	},

	{
		title: "ADOBE PACKAGE",
		subtitle: "",
		description: "",
		icon: "/img/skills/adobe.svg",
		type: "tools",
		priority: 3,
	},

	{
		title: "WORDPRESS",
		subtitle: "",
		description: "",
		icon: "/img/skills/wordpress.svg",
		type: "tools",
		priority: 3,
	},
];
