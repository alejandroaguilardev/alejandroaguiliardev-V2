import { ReactElement } from "react";

export interface IMode {
	mode: string;
}

export interface IModeProvider {
	children:  React.ReactElement | React.ReactElement[] | React.ReactNode;
}

export interface IInit {
	theme: { mode: string };
	handleTheme: (mode: string) => void;
}
