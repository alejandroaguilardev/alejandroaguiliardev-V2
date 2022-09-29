import { Modal, Box } from "@mui/material"
import Image from "next/image";
import { IImageModal } from "./IImageModal";


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'transparent',
    boxShadow: 24,

};

export const ImagenModal = ({ open, handleClose, item }: IImageModal) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box sx={{ ...style }}>
                <Image
                    src={`${item.img}`}
                    alt={item.title}
                    width={1000}
                    height={800}
                />
            </Box>
        </Modal>
    )
}
