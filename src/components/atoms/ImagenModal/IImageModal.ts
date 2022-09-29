import { IDataGalleryEducation } from "../../../data/dataGalleryEducation";

export interface IImageModal {
	open: boolean;
	handleClose: () => void;
	item: IDataGalleryEducation;
}
