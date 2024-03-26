import { Button, Checkbox, Paper, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

type PropsType = {
  todo: TodoItemType;
  deleteHandler : (id:string)=>void
  completeHandler : (id:string)=>void
  editHandler : (id:string,text:string)=>void
};

const TodoItem = ({ todo, deleteHandler, completeHandler, editHandler }: PropsType) => {
  
  const [editActive, setEditActive] = useState<boolean>(false)
  const [textToEdit, setTextToEdit] = useState<string>(todo.title)
  
  return (
    <Paper
      sx={{
        padding: "1rem",
      }}

    >
      <Stack direction={"row"} alignItems={"center"}>
        {
          editActive?<TextField value={textToEdit}
          onChange={(e)=>setTextToEdit(e.target.value)}
          onKeyDown={(e)=>{
            if(e.key==="Enter" && textToEdit!="")
            {
              editHandler(todo.id, textToEdit)
              setEditActive(false)
            }
          }}
          />:<Typography marginRight={"auto"}>{todo.title}</Typography>
        }
        
        <Checkbox checked={todo.isCompleted} onChange={()=>completeHandler(todo.id)}/>
        <Button onClick={()=>setEditActive((prev)=>!prev)}>
          <FaEdit size={20}/>
        </Button>
        <Button onClick={()=>deleteHandler(todo.id)}>
          <MdDeleteOutline size={20}/>
        </Button>
      </Stack>
    </Paper>
  );
};

export default TodoItem;
