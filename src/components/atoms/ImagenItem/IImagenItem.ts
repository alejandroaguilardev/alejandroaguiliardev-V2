import { IDataGalleryEducation } from "../../../data/dataGalleryEducation";

export interface IImagenItem {
	data: IDataGalleryEducation;
	setOpen: (open: boolean) => void;
	setItem: (item: IDataGalleryEducation) => void;
}
