import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { TodoItem } from "./TodoItem";
let count = 0;
function Todo() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const add = () => {
    if (inputRef.current.value === "") {
      return;
    }
    setTodos([
      ...todos,
      { nmr: count++, text: inputRef.current.value, display: "" },
    ]);
    inputRef.current.value = "";
    localStorage.setItem("todos_count", count);
  };

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, 100);
  }, [todos]);
  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")));
    count = localStorage.getItem("todos_count");
  }, []);
  return (
    <div className="w-[600px] min-h-[532px] rounded-lg m-auto  flex flex-col py-[0,30px] mt-20 px-11 bg-white">
      <div className="mt-20 text-blue-950 text-3xl font-semibold">
        To-Do List
      </div>
      <div className="flex justify-center items-center mt-11">
        <input
          ref={inputRef}
          type="text"
          placeholder="Add your task"
          className="rounded-full bg-slate-300 border-none outline-none w-[576px] h-11 px-[35px] text-xl"
        />
        <button
          onClick={() => {
            add();
          }}
          className="rounded-full bg-red-500 w-[130px] h-12 flex justify-center items-center -ml-[113px] text-white text-[24px] font-semibold"
        >
          ADD
        </button>
      </div>
      <div>
        {todos.map((item, index) => {
          return (
            <TodoItem
              setTodos={setTodos}
              key={index}
              nmbr={item.nmr}
              display={item.display}
              text={item.text}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Todo;
