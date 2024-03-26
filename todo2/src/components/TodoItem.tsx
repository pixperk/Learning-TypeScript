import { Button, Checkbox, Paper, Stack, Typography } from "@mui/material";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

type PropsType = {
  todo: TodoItemType;
  deleteHandler : (id:string)=>void
  completeHandler : (id:string)=>void
};

const TodoItem = ({ todo, deleteHandler, completeHandler }: PropsType) => {
  return (
    <Paper
      sx={{
        padding: "1rem",
      }}
    >
      <Stack direction={"row"} alignItems={"center"}>
        <Typography marginRight={"auto"}>{todo.title}</Typography>
        <Checkbox checked={todo.isCompleted} onChange={()=>completeHandler(todo.id)}/>
        <Button >
          <FaEdit />
        </Button>
        <Button onClick={()=>deleteHandler(todo.id)}>
          <MdDeleteOutline />
        </Button>
      </Stack>
    </Paper>
  );
};

export default TodoItem;
