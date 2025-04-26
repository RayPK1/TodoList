import TodoList from "./todolist/TodoList";
import Textfield from '@atlaskit/textfield'
import Button from "@atlaskit/button/new";
import { useCallback, useState } from "react";
import { v4 } from "uuid"
function App() {
  //state - dữ liệu nội tại của componet, props - dữ liệu được truyền vào
  const [todolist, setTodoList] = useState([]); // array
  const [textInput, setTextInput] = useState(""); // array

  const onTextInputChanged = useCallback((input) =>{
    setTextInput(input.target.value)
  },[]);

  const onAddBtnClick = useCallback((click) =>
  {
    setTodoList([ {Id: v4(), name: textInput, isDeleted : false }, ...todolist])
    setTextInput("");
  },[textInput, todolist]);

  // const onTextInputChanged = (input) =>{
  //   setTextInput(input.target.value)
  // };

  // const onAddBtnClick = (click) =>
  // {
  //   setTodoList([...todolist, {Id: v4(), name: textInput, isDeleted : false }])
  //   setTextInput("")
  // };


  return (
    <>
      <h3>Danh sách cần làm</h3>
      <Textfield name='add-todo' placeholder='Thêm việc cần làm...' elemAfterInput={<Button isDisabled ={!textInput} appearance='primary' onClick={onAddBtnClick}>Thêm</Button>}
      css ={{padding: "2px 4px 2px"}}
      value={textInput}
      onChange={onTextInputChanged}></Textfield>
      <TodoList todolist={todolist}/>
    </>

  )
}

export default App;
