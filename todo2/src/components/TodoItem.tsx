import { Button, Checkbox, Paper, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { IoSaveOutline } from "react-icons/io5";

type PropsType = {
  todo: TodoItemType;
  deleteHandler: (id: string) => void;
  completeHandler: (id: string) => void;
  editHandler: (id: string, text: string) => void;
};

const TodoItem = ({ todo, deleteHandler, completeHandler, editHandler }: PropsType) => {
  const [editActive, setEditActive] = useState<boolean>(false);
  const [textToEdit, setTextToEdit] = useState<string>(todo.title);

  return (
    <Paper
      sx={{
        padding: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {editActive ? (
        <TextField
          value={textToEdit}
          onChange={(e) => setTextToEdit(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && textToEdit !== "") {
              editHandler(todo.id, textToEdit);
              setEditActive(false);
            }
          }}
          autoFocus
          fullWidth
          sx={{ mr: 1 }}
        />
      ) : (
        <Typography sx={{ flexGrow: 1 }}>{todo.title}</Typography>
      )}

      <Checkbox checked={todo.isCompleted} onChange={() => completeHandler(todo.id)} sx={{ ml: 1 }} />

      <Stack direction="row" spacing={1}>
        <Button onClick={() => setEditActive((prev) => !prev)} sx={{ color: "primary.main" }}>
          {editActive ? <IoSaveOutline size={20} /> : <FaEdit size={20} />}
        </Button>
        <Button onClick={() => deleteHandler(todo.id)} sx={{ color: "error.main" }}>
          <MdDeleteOutline size={20} />
        </Button>
      </Stack>
    </Paper>
  );
};

export default TodoItem;
