"use client";

import React, { useState, KeyboardEvent } from "react";
import { postNewTodoMutate } from "@/actions/postNewTodoMutate";

export default function InputTodo() {
  const [value, setValue] = useState("");

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.nativeEvent.isComposing) return;
    const { key } = e;
    if (key === "Enter") {
      postNewTodoMutate(value);
      setValue("");
    }
  };
  return (
    <input
      onChange={(e) => setValue(e.target.value)}
      placeholder="입력하세요"
      {...{ value, onKeyDown }}
    />
  );
}
