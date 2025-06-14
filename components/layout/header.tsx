"use client"

import { AddTaskModal } from "@/components/modals/add-task-modal"
import type { Column, Task } from "@/types/task"

interface HeaderProps {
  columns: Column[]
  onAddTask: (task: Omit<Task, "id">, columnId: string) => void
}

export function Header({ columns, onAddTask }: HeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Task Management</h1>
          <p className="text-gray-600">Quản lý công việc hiệu quả với Kanban board</p>
        </div>
        <AddTaskModal columns={columns} onAddTask={onAddTask} />
      </div>
    </div>
  )
}
