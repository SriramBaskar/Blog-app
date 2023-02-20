import { useContext } from "react"
import { ThemeContext } from "../Context/ThemeContext"


export const useThemeContext = () => {

    const themeContext = useContext(ThemeContext) 

    if (themeContext === undefined) {
        throw new Error('Theme context is undefine')
    }

    return themeContext
}

//For using globl state we need to use "useContext" hook. Rather that declearing in all the componente, 
//created as custome hook & use it where ever we want. additional checking error if value is undefine (or) proper value. 