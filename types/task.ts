export interface Task {
  id: string
  title: string
  description: string
  assignee: string
  priority: "low" | "medium" | "high"
  category: string
  dueDate: string
  tags: string[]
}

export interface Column {
  id: string
  title: string
  color: string
  tasks: Task[]
}
