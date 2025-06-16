"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { KanbanBoard } from "@/components/task-board/kanban-board"
import { initialData } from "@/lib/data"
import type { Column, Task } from "@/types/task"

export default function TaskManagementApp() {
  const [columns, setColumns] = useState<Column[]>(initialData)

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result

    if (!destination) return

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return
    }

    const sourceColumn = columns.find((col) => col.id === source.droppableId)
    const destColumn = columns.find((col) => col.id === destination.droppableId)

    if (!sourceColumn || !destColumn) return

    const sourceTask = sourceColumn.tasks.find((task) => task.id === draggableId)
    if (!sourceTask) return

    const newColumns = columns.map((column) => {
      if (column.id === source.droppableId) {
        return {
          ...column,
          tasks: column.tasks.filter((task) => task.id !== draggableId),
        }
      }
      if (column.id === destination.droppableId) {
        const newTasks = [...column.tasks]
        newTasks.splice(destination.index, 0, sourceTask)
        return {
          ...column,
          tasks: newTasks,
        }
      }
      return column
    })

    setColumns(newColumns)
  }

  const handleAddTask = (task: Omit<Task, "id">, columnId: string) => {
    const newTask: Task = {
      ...task,
      id: Date.now().toString(),
    }

    const newColumns = columns.map((column) => {
      if (column.id === columnId) {
        return {
          ...column,
          tasks: [...column.tasks, newTask],
        }
      }
      return column
    })

    setColumns(newColumns)
  }

  const handleDeleteTask = (taskId: string, columnId: string) => {
    const newColumns = columns.map((column) => {
      if (column.id === columnId) {
        return {
          ...column,
          tasks: column.tasks.filter((task) => task.id !== taskId),
        }
      }
      return column
    })
    setColumns(newColumns)
  }

  const handleEditTask = (task: Task) => {
    // TODO: Implement edit functionality
    console.log("Edit task:", task)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <Header columns={columns} onAddTask={handleAddTask} />
        <KanbanBoard
          columns={columns}
          onDragEnd={onDragEnd}
          onEditTask={handleEditTask}
          onDeleteTask={handleDeleteTask}
        />
      </div>
    </div>
  )
}
