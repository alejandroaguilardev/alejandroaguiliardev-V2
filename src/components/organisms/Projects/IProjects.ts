export interface IProjects {
	title: string;
	description: string;
	dataProjects: {
		title: string;
		description: string;
		icon: string;
		subtitle: string;
		date: string;
		link: string;
		repository: string;
		priority: number;
	}[];
}
