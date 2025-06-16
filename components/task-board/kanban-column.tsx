"use client"

import { Droppable, Draggable } from "@hello-pangea/dnd"
import { Badge } from "@/components/ui/badge"
import { TaskCard } from "@/components/task-card/task-card"
import type { Column, Task } from "@/types/task"

interface KanbanColumnProps {
  column: Column
  onEditTask?: (task: Task) => void
  onDeleteTask?: (taskId: string, columnId: string) => void
}

export function KanbanColumn({ column, onEditTask, onDeleteTask }: KanbanColumnProps) {
  // Tạo header color riêng cho mỗi cột
  const getHeaderColor = (columnId: string) => {
    switch (columnId) {
      case "todo":
        return "bg-purple-100 dark:bg-purple-800/30 border-purple-300 dark:border-purple-600"
      case "doing":
        return "bg-blue-100 dark:bg-blue-800/30 border-blue-300 dark:border-blue-600"
      case "done":
        return "bg-green-100 dark:bg-green-800/30 border-green-300 dark:border-green-600"
      default:
        return "bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600"
    }
  }

  // Tạo title color cho mỗi cột
  const getTitleColor = (columnId: string) => {
    switch (columnId) {
      case "todo":
        return "text-purple-800 dark:text-purple-200"
      case "doing":
        return "text-blue-800 dark:text-blue-200"
      case "done":
        return "text-green-800 dark:text-green-200"
      default:
        return "text-gray-800 dark:text-gray-200"
    }
  }

  return (
    <div className="flex flex-col">
      <div className={`rounded-lg border-2 ${column.color} p-4 mb-4 transition-colors duration-300`}>
        {/* Header với màu đặc trưng */}
        <div className={`rounded-md p-3 mb-4 ${getHeaderColor(column.id)}`}>
          <div className="flex items-center justify-between">
            <h2 className={`text-lg font-semibold ${getTitleColor(column.id)}`}>{column.title}</h2>
            <Badge variant="secondary" className="bg-white/70 dark:bg-gray-700/70 dark:text-gray-200">
              {column.tasks.length}
            </Badge>
          </div>
        </div>

        <Droppable droppableId={column.id}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={`min-h-[200px] space-y-3 transition-colors duration-200 ${
                snapshot.isDraggingOver ? "bg-white/30 dark:bg-gray-700/30 rounded-lg p-2" : ""
              }`}
            >
              {column.tasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided, snapshot) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <TaskCard
                        task={task}
                        onEdit={onEditTask}
                        onDelete={(taskId) => onDeleteTask?.(taskId, column.id)}
                        isDragging={snapshot.isDragging}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </div>
  )
}
