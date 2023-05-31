export const getTodos = async () => {
  const res = await fetch("http://localhost:8080/api/todos", {
    cache: "no-cache",
  });
  return await res.json();
};
export const postNewTodo = async (newTodo: string) => {
  await fetch(`http://localhost:8080/api/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: newTodo, content: "" }),
  });
};
