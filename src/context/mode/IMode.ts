import { ReactNode } from "react";

export interface IMode {
	mode: string;
}

export interface IModeProvider {
	children: React.ReactNode;
}

export interface IInit {
	theme: { mode: boolean };
	handleTheme: (mode: boolean) => void;
}
