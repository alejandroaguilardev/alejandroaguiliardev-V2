import { Fab, IconButton } from "@mui/material"
import { INetworks } from "./INetworks"

export const Networks = ({ children, title, fab, text }: INetworks) => {
    return (
        <>
            {fab ?
                <>
                    <Fab color="primary" size="small" aria-label={title}>
                        {children}
                    </Fab>
                </>
                :
                <>
                    <IconButton>
                        {children}
                    </IconButton>
                    {!fab && ` ${text}`}
                </>
            }
        </>
    )
}