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

  const completeHandler = (id: string): void => {};
  const deleteHandler = (id: string): void => {};

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
            key={i.id}
            todo={i}
          />
        ))}
      </Stack>
      <TextField value={title}
      onChange={(e)=>setTitle(e.target.value)}
      fullWidth label={"New Task"} />
      <Button onClick={submitHandler}
        sx={{
          margin: "1rem 0",
          padding: "0..5rem",
        }}
        fullWidth
        variant="contained"
        
      >
        <IoIosAddCircleOutline size={20} />
      </Button>
    
    </Container>
  );
};

export default App;
