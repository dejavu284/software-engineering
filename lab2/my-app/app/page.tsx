import Link from "next/link";
import Header from "./components/header/header";
import TasksTable from "./components/tasks-table/tasks-table";

export default function Home() {
  return (
    <main>
      <Header></Header>
      <TasksTable></TasksTable>
    </main>
  );
}
