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
  const getColumnColorClasses = (color: string) => {
    const baseClasses = color.replace("bg-", "").replace("border-", "")
    return `${color} dark:bg-gray-800 dark:border-gray-600`
  }

  return (
    <div className="flex flex-col">
      <div
        className={`rounded-lg border-2 ${getColumnColorClasses(column.color)} p-4 mb-4 transition-colors duration-300`}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{column.title}</h2>
          <Badge variant="secondary" className="bg-white/50 dark:bg-gray-700/50 dark:text-gray-200">
            {column.tasks.length}
          </Badge>
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
