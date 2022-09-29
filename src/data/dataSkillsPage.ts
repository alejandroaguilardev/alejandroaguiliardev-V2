import { dataSkillsType } from "./dataSkills";

export const dataSkillsPage = [
	{
		title: "Programming language",
		description: "Programming languages ​​you used in projects and work",
		dataSkills: dataSkillsType("Languaje"),
	},
	{
		title: "Front End Technologies",
		description:
			"Some of the Framework and libraries that I have used in projects.",
		dataSkills: dataSkillsType("frontend"),
	},
	{
		title: "Back End Technologies",
		description:
			"Some of the Framework and libraries that I have used in projects.",
		dataSkills: dataSkillsType("backend"),
	},
	{
		title: "Tools",
		description:
			"Other tools I have worked with.",
		dataSkills: dataSkillsType("tools"),
	},
];
