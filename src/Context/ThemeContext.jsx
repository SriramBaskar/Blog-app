import { createContext, useReducer } from "react";

export const ThemeContext = createContext()

export const ThemeContextProvider = ({children}) => {

    const ThemesReducer = (state, action) => {
        switch (action.type) {
            case 'LIGHT':
                return {...state,theme:'light'}
            case 'DARK':
                return {...state,theme:'dark'}
            default:
                return state
        }
    }
    
    const [state, dispatch] = useReducer(ThemesReducer, {theme : 'light'})

    return (
        <ThemeContext.Provider value={{...state, dispatch}}>
            {children}
        </ThemeContext.Provider>
    )
}