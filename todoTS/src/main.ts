import './style.css'
interface Todo{
  title:string,
  isCompleted: boolean,
  readonly id: string
}

const todos:Todo[]=[]

const todoContainer = document.querySelector(".todoContainer") as HTMLDivElement

const todoInput = document.getElementsByName("title")[0] as HTMLInputElement

const myForm = document.getElementById("myForm") as HTMLFormElement

myForm.onsubmit=(e)=>{
 e.preventDefault()

 const todo : Todo  = {
  title:todoInput.value,
  isCompleted:false,
  id:String(Math.random()*100)
 }

 todos.push(todo)
 todoInput.value=""
renderTodo(todos) 
}

const generateTodoItem=(title:string, isCompleted:boolean,id:string)=>{
  const todo:HTMLDivElement = document.createElement("div")
  todo.className="todo"
  const checkBox:HTMLInputElement = document.createElement("input")
  checkBox.setAttribute("type","checkbox")
  checkBox.className = "isCompleted"
  checkBox.checked = isCompleted
  checkBox.onchange=()=>{
    todos.find(i=>{
      if(i.id===id) i.isCompleted = checkBox.checked
    })
    para.className=checkBox.checked?"textCut":""
  }

  const para:HTMLParagraphElement = document.createElement("p")
  para.innerText=title;
  para.className=isCompleted?"textCut":""

  const btn:HTMLButtonElement = document.createElement("button")
  btn.innerText="X"
  btn.className="deleteBtn"
  btn.onclick = ()=>{deleteTodo(id)}

  todo.append(checkBox,para,btn)
  todoContainer.append(todo)


}

const deleteTodo = (id:string)=>{
  const idx = todos.findIndex(item=>item.id===id)
  todos.splice(idx,1)
  renderTodo(todos)
}

const renderTodo=(todos:Todo[])=>{
  todoContainer.innerText=""
  todos.forEach(item=>{
    generateTodoItem(item.title, item.isCompleted, item.id)
  })
}