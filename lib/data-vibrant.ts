import type { Column } from "@/types/task"

export const initialData: Column[] = [
  {
    id: "todo",
    title: "To Do",
    color:
      "bg-gradient-to-br from-purple-100 to-purple-200 border-purple-300 dark:from-purple-900/30 dark:to-purple-800/30 dark:border-purple-600",
    tasks: [
      // ... tasks remain the same
    ],
  },
  {
    id: "doing",
    title: "Doing",
    color:
      "bg-gradient-to-br from-blue-100 to-blue-200 border-blue-300 dark:from-blue-900/30 dark:to-blue-800/30 dark:border-blue-600",
    tasks: [
      // ... tasks remain the same
    ],
  },
  {
    id: "done",
    title: "Done",
    color:
      "bg-gradient-to-br from-green-100 to-green-200 border-green-300 dark:from-green-900/30 dark:to-green-800/30 dark:border-green-600",
    tasks: [
      // ... tasks remain the same
    ],
  },
]
