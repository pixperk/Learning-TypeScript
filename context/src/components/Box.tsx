import { useContext } from "react"
import { ThemeContext } from "../App"

const Box = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
   
  return (
    <div className='boxContainer'style={{
        backgroundColor:theme==="dark"?"#242424":"white",
        color:theme==="dark"?"white":"#242424",
    }}>
        <h1>Box 1</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default Box