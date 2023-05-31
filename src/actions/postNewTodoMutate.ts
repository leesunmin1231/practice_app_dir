"use server";

import { postNewTodo } from "@/http";
import { revalidatePath } from "next/cache";

export const postNewTodoMutate = async (value: string) => {
  // Mutate external data source
  await postNewTodo(value);
  revalidatePath("/todo");
};
