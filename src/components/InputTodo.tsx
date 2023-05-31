"use client";

import React, { useState, KeyboardEvent } from "react";
import { postNewTodo } from "@/http";
import { useRouter } from "next/navigation";

export default function InputTodo() {
  const [value, setValue] = useState("");
  const router = useRouter();

  const postNewTodoMutate = async () => {
    // Mutate external data source
    await postNewTodo(value);
    router.refresh();
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.nativeEvent.isComposing) return;
    const { key } = e;
    if (key === "Enter") {
      postNewTodoMutate();
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
