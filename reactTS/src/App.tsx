import { useState, FormEvent } from "react"
import Box from "./components/Box"

interface Person{
  name:string,
  age:number
}

function App() {

  const submitHandler = (e:FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    console.log(user)
  }
  
  const [val, setVal]=useState<string>("")
  const[user,setUser] = useState<Person>()

  return (
    <>
     <Box label="Fill in" value={val} setter={setVal}/>
     <form onSubmit={submitHandler}>
      <input type="number"
      placeholder="How Old are you?..."
      value={user?.age || ""}
      onChange={(e)=>setUser(prev=>({...prev!, age:Number(e.target.value)}))}
      />
      <input type="text"
      placeholder="Enter your name..."
      value={user?.name || ""}
      onChange={(e)=>setUser(prev=>({...prev!, name:(e.target.value)}))}
      />

      <button type="submit">Register</button>
     </form>
    </>
  )
}

export default App
