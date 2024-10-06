import { ColumnDef } from "@tanstack/react-table"

type Task = {
  id: number
  title: string
  status: "waiting" | "processing" | "done" | "canceled"
  description: string
}

export const tasks: Task[] = [
    {
      id: 1,
      title: "Задача 1",
      status: "waiting",
      description: "Пример описания задачи 1",
    },
    {
      id: 2,
      title: "Задача 2",
      status: "processing",
      description: "Пример описания задачи 2",
    },
    {
      id: 3,
      title: "Задача 3",
      status: "done",
      description: "Пример описания задачи 3",
    },
    {
      id: 4,
      title: "Задача 4",
      status: "canceled",
      description: "Пример описания задачи 4",
    },
    {
      id: 5,
      title: "Задача 5",
      status: "canceled",
      description: "Пример описания задачи 5",
    },
]
