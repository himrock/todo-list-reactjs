import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
import TodoList from "./TodoList.js";


var destinstion =document.querySelector("#container");

ReactDOM.render(
    <div>
        <TodoList/>
    </div>,
    destinstion
);