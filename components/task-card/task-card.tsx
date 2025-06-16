"use client"

import { Calendar, Tag, MoreHorizontal, Edit, Trash2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import type { Task } from "@/types/task"
import { getPriorityColor, getPriorityText } from "@/lib/utils"

interface TaskCardProps {
  task: Task
  onEdit?: (task: Task) => void
  onDelete?: (taskId: string) => void
  isDragging?: boolean
}

export function TaskCard({ task, onEdit, onDelete, isDragging }: TaskCardProps) {
  return (
    <Card
      className={`cursor-grab active:cursor-grabbing transition-all duration-200 dark:bg-gray-800 dark:border-gray-700 ${
        isDragging ? "rotate-3 shadow-lg dark:shadow-gray-900/50" : "hover:shadow-md dark:hover:shadow-gray-900/30"
      }`}
    >
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <CardTitle className="text-sm font-medium text-gray-900 dark:text-gray-100 line-clamp-2">
            {task.title}
          </CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-6 w-6 p-0 dark:hover:bg-gray-700">
                <MoreHorizontal className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="dark:bg-gray-800 dark:border-gray-700">
              <DropdownMenuItem onClick={() => onEdit?.(task)} className="dark:hover:bg-gray-700">
                <Edit className="h-3 w-3 mr-2" />
                Chỉnh sửa
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-red-600 dark:text-red-400 dark:hover:bg-gray-700"
                onClick={() => onDelete?.(task.id)}
              >
                <Trash2 className="h-3 w-3 mr-2" />
                Xóa
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">{task.description}</p>

        <div className="flex items-center justify-between mb-3">
          <Badge className={`text-xs ${getPriorityColor(task.priority)} dark:border-opacity-50`}>
            {getPriorityText(task.priority)}
          </Badge>
          {task.category && (
            <Badge variant="outline" className="text-xs dark:border-gray-600 dark:text-gray-300">
              <Tag className="w-3 h-3 mr-1" />
              {task.category}
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
          <div className="flex items-center">
            <Avatar className="h-5 w-5 mr-2">
              <AvatarFallback className="text-xs dark:bg-gray-700 dark:text-gray-300">
                {task.assignee.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <span>{task.assignee}</span>
          </div>
          {task.dueDate && (
            <div className="flex items-center">
              <Calendar className="w-3 h-3 mr-1" />
              <span>{new Date(task.dueDate).toLocaleDateString("vi-VN")}</span>
            </div>
          )}
        </div>

        {task.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {task.tags.map((tag, tagIndex) => (
              <Badge key={tagIndex} variant="secondary" className="text-xs dark:bg-gray-700 dark:text-gray-300">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
