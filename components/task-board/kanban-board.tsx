"use client"

import { DragDropContext } from "@hello-pangea/dnd"
import { KanbanColumn } from "./kanban-column"
import type { Column, Task } from "@/types/task"

interface KanbanBoardProps {
  columns: Column[]
  onDragEnd: (result: any) => void
  onEditTask?: (task: Task) => void
  onDeleteTask?: (taskId: string, columnId: string) => void
}

export function KanbanBoard({ columns, onDragEnd, onEditTask, onDeleteTask }: KanbanBoardProps) {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {columns.map((column) => (
          <KanbanColumn key={column.id} column={column} onEditTask={onEditTask} onDeleteTask={onDeleteTask} />
        ))}
      </div>
    </DragDropContext>
  )
}
