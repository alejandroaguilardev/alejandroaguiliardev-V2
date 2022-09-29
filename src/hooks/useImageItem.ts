import { useState } from "react";

export const useImageItem = () => {
	const [open, setOpen] = useState(false);
	const [item, setItem] = useState({
		title: "",
		img: "",
		author: "",
	});

	return {
		open,
		setOpen,
		item,
		setItem,
	};
};
