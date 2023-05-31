import InputTodo from "@/components/InputTodo";
import TodoList from "@/components/TodoList";
import Trigger from "@/components/Trigger";

export default function Home() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <header>TodoList</header>
      <aside>
        <Trigger />
      </aside>
      <main>
        <InputTodo />
        {/* @ts-expect-error Server Component */}
        <TodoList />
      </main>
    </div>
  );
}
