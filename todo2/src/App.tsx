import {
  AppBar,
  Button,
  Container,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import TodoItem from "./components/TodoItem";
import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

const App = () => {
  const [todos, setTodos] = useState<TodoItemType[]>([]);
  const [title, setTitle]=useState<string>("")

  const completeHandler = (id: string): void => {
    const newTodos:TodoItemType[] = todos.map(i=>{
      if(i.id===id) i.isCompleted = !i.isCompleted
      return i
    })
    setTodos(newTodos)
  };

  const deleteHandler = (id: string): void => {
    const newTodos:TodoItemType[] = todos.filter(i=>i.id!==id)
  
    setTodos(newTodos)
  };
  const editHandler = (id: string, text:string): void => {
    const newTodos:TodoItemType[] = todos.map(i=>{
      if(i.id===id) i.title = text
      return i
    })
    setTodos(newTodos)
  };

  const submitHandler = ():void => {
   
    const newTodo : TodoItemType = {
      title,
      isCompleted: false,
      id:String(Math.random()*1000)
    }
    setTodos(prev=>([...prev, newTodo]))
    setTitle("")
  }

  return (
    <Container maxWidth="sm" sx={{ height: "100vh" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography>To-Do List</Typography>
        </Toolbar>
      </AppBar>
      <Stack height={"80%"} direction={"column"} spacing={"1rem"} p={"1rem"}>
        {todos.map((i) => (
          <TodoItem
            completeHandler={completeHandler}
            deleteHandler={deleteHandler}
            editHandler={editHandler}
            key={i.id}
            todo={i}
          />
        ))}
      </Stack>
      <TextField value={title}
      onChange={(e)=>setTitle(e.target.value)}
      fullWidth label={"New Task"}
      onKeyDown={(e)=>{
        if(e.key==="Enter" && title!="") submitHandler()
      }} />
      <Button onClick={submitHandler}
        fullWidth
        variant="contained"
        disabled={title===""}
      >
        <IoIosAddCircleOutline size={20} />
      </Button>
    
    </Container>
  );
};

export default App;
