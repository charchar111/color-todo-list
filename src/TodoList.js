import { memo, useEffect, useState } from "react";
import styled from "./TodoList.module.css";

function TodoListForm({ conveyToApp, setConveyToApp }) {
  // const [todoTextarea, setTodoTextarea] = useState();
  const [titleColor, setTitleColor] = useState("yellow");

  return (
    <form
      className={`todolist__todo-form ${styled["todolist__todo-form"]}`}
      onSubmit={(event) => {
        event.preventDefault();
        const input = event.target.querySelector("input");
        const textarea = event.target.querySelector("textarea");

        setConveyToApp((current) => [
          ...current,
          { title: input.value, content: textarea.value, color: titleColor },
        ]);
        event.target.reset();
      }}
    >
      <div className={`${styled["todolist__todo-row1"]}`}>
        <input
          id="todo-form__input"
          placeholder="title"
          className={`${styled["todo-form__input"]} ${styled["todo-form__input-default"]}`}
          type="text"
        />
        <button
          className="button1"
          style={{ backgroundColor: "rgb(155,155,155)" }}
        >
          <i className="fa-solid fa-check icon1"></i>
        </button>

        <div
          className={`${styled["todo-form__color-select"]} ${styled["color__yellow"]}`}
          onClick={(event) => {
            const colorBox = document.getElementById("todo-form__color-box");
            colorBox.classList.toggle("opacity-zero");
          }}
        ></div>
        <ul
          id="todo-form__color-box"
          className={`todo-form__color-box ${styled["todo-form__color-box"]} opacity-zero`}
        >
          <div
            className={`color__yellow ${styled["color__yellow"]}`}
            onClick={() => {
              const input = document.getElementById("todo-form__input");
              input.classList.remove(
                styled["todo-form__input-default"],
                styled["todo-form__input-blue"],
                styled["todo-form__input-red"],
                styled["todo-form__input-puple"]
              );
              if (
                !input.classList.contains(
                  `${styled["todo-form__input-yellow"]}`
                )
              ) {
                setTitleColor("yellow");
                input.classList.add(`${styled["todo-form__input-yellow"]}`);
              }
            }}
          ></div>
          <div
            className={`color__blue ${styled["color__blue"]}`}
            onClick={() => {
              const input = document.getElementById("todo-form__input");
              input.classList.remove(
                styled["todo-form__input-default"],
                styled["todo-form__input-yellow"],
                styled["todo-form__input-red"],
                styled["todo-form__input-puple"]
              );
              if (
                !input.classList.contains(`${styled["todo-form__input-blue"]}`)
              ) {
                setTitleColor("blue");
                input.classList.add(`${styled["todo-form__input-blue"]}`);
              }
            }}
          ></div>

          <div
            className={`color__puple ${styled["color__puple"]}`}
            onClick={() => {
              const input = document.getElementById("todo-form__input");
              input.classList.remove(
                styled["todo-form__input-default"],
                styled["todo-form__input-yellow"],
                styled["todo-form__input-red"],
                styled["todo-form__input-blue"]
              );
              if (
                !input.classList.contains(`${styled["todo-form__input-puple"]}`)
              ) {
                setTitleColor("puple");
                input.classList.add(`${styled["todo-form__input-puple"]}`);
              }
            }}
          ></div>
          <div
            className={`color__red ${styled["color__red"]}`}
            onClick={() => {
              const input = document.getElementById("todo-form__input");
              input.classList.remove(
                styled["todo-form__input-default"],
                styled["todo-form__input-yellow"],
                styled["todo-form__input-puple"],
                styled["todo-form__input-blue"]
              );
              if (
                !input.classList.contains(`${styled["todo-form__input-red"]}`)
              ) {
                setTitleColor("red");
                input.classList.add(`${styled["todo-form__input-red"]}`);
              }
            }}
          ></div>
        </ul>
        {/* 메모 색상 선택 */}
      </div>

      <textarea
        placeholder="text"
        className={`${styled["todo-form__textarea"]}`}
      ></textarea>
      {/* 텍스트 내용 */}
    </form>
  );
}

function TodoList({ conveyToApp, setConveyToApp }) {
  //   useEffect(() => {}, [todoArr,todoInput]);

  return (
    <div className={`todolist-form ${styled["todolist"]}`}>
      <TodoListForm conveyToApp={conveyToApp} setConveyToApp={setConveyToApp} />
    </div>
  );
}

export default TodoList;
