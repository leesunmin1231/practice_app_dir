import React from "react";
import { getTodos } from "@/http";
import { Todo } from "@/type";

export default async function TodoList() {
  const data: Todo[] = await getTodos();
  return (
    <div className="todo-list">
      {data.map((todo: Todo) => (
        <div className="todo" key={todo.id}>
          {todo.title}
        </div>
      ))}
    </div>
  );
}
