import { useReducer } from "react"
import { IModeProvider } from "./IMode";
import { ModeContext } from "./ModeContext";
import { ModeReducer } from "./ModeReducer"

const INIT = {
    mode: false
}

export const ModeProvider = ({ children }: IModeProvider) => {
    const [theme, dispatch] = useReducer(ModeReducer, INIT);

    const handleTheme = (mode: boolean) => {
        dispatch({
            type: 'changeMode',
            payload: { mode }
        })
    }

    return (
        <ModeContext.Provider value={{ theme, handleTheme }} >
            {children}
        </ModeContext.Provider>
    )
}
