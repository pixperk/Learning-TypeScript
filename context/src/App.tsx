import { ReactNode, createContext, useState } from "react"
import Box from "./components/Box"

type ThemeType = "light"|"dark"

interface ThemeContextType{
  theme:ThemeType,
  toggleTheme:()=>void

}

export const ThemeContext = createContext<ThemeContextType>(
  {
    theme:"light",
    toggleTheme:()=>{}
  }
)

const ThemeProvider = ({children}:{children:ReactNode}) =>{
  const[theme, setTheme] = useState<ThemeType>("light")

  const toggleTheme = () => {
    setTheme((prev)=>(prev==="light"?"dark":"light"))
  }
  return(<ThemeContext.Provider value={{theme, toggleTheme}}>
    {children}
    </ThemeContext.Provider>)
}



const App = () => {
  return (
      <ThemeProvider>
      <div>App</div>
      <Box/>
      </ThemeProvider>
  )
}

export default App