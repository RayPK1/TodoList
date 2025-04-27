import TodoList from "./todolist/TodoList";
import Textfield from '@atlaskit/textfield'
import Button from "@atlaskit/button/new";
import { useCallback, useEffect, useState } from "react";
import { v4 } from "uuid"
function App() {
  //state - dữ liệu nội tại của componet, props - dữ liệu được truyền vào
  const [todolist, setTodoList] = useState([]); // array
  const [textInput, setTextInput] = useState(""); // array
  const [isInitialized, setIsInitialized] = useState(false);

  const TODO_LIST_KEY = "TODO_APP";
  // lấy dữ liệu từ localStorage
  useEffect(() => {
    const storedTodoList = localStorage.getItem(TODO_LIST_KEY);
    if (storedTodoList && !isInitialized) {
      try {
        const parsedTodoList = JSON.parse(storedTodoList);
        setTodoList(parsedTodoList);
        setIsInitialized(true);
        console.log("Stored todo list:", parsedTodoList);
        console.log("Stored todo list:", todolist.length);
      } catch (error) {
        console.error("Error parsing stored todo list:", error);
        setTodoList([]);
      }
    }
  }, [isInitialized]);

  // lưu trữ dữ liệu vào localStorage
  useEffect(() => {
   localStorage.setItem(TODO_LIST_KEY, JSON.stringify(todolist));
  }, [todolist]);


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
  const onTrashBtnClick = useCallback((Id)=>
  {
    console.log("onTrashBtnClick called with Id:", Id); // Add this line
    setTodoList(prevState => prevState.map(todo => todo.Id === Id ? {...todo, isDeleted: true} : todo))
  }, []);

  

  return (
    <>
      <h3>Danh sách cần làm</h3>
      <Textfield 
      name='add-todo' 
      placeholder='Thêm việc cần làm...' 
      elemAfterInput={<Button 
        isDisabled ={!textInput} 
        appearance='primary' 
        onClick={onAddBtnClick}>Thêm</Button>}
      css ={{padding: "2px 4px 2px"}}
      value={textInput}
      onChange={onTextInputChanged}>

      </Textfield>
      <TodoList todolist={todolist} onTrashBtnClick={onTrashBtnClick}/>
    </>

  )
}

export default App;
