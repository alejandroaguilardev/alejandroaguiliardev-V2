import { useReducer } from "react"
import { IModeProvider } from "./IMode";
import { ModeContext } from "./ModeContext";
import { ModeReducer } from "./ModeReducer"

const INIT = {
    mode: 'light'
}

export const ModeProvider = ({ children }: IModeProvider) => {
    const [theme, dispatch] = useReducer(ModeReducer, INIT);

    const handleTheme = (mode: string) => {
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
