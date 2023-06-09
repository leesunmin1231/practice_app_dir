import InputTodo from "@/components/InputTodo";
import TodoList from "@/components/TodoList";
import Trigger from "@/components/Trigger";
import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <header>TodoList</header>
      <section>
        <Link href="/todo">todo 보기</Link>
      </section>
    </div>
  );
}
