"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Task, Column } from "@/types/task"

interface AddTaskModalProps {
  columns: Column[]
  onAddTask: (task: Omit<Task, "id">, columnId: string) => void
}

export function AddTaskModal({ columns, onAddTask }: AddTaskModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedColumn, setSelectedColumn] = useState<string>("")
  const [newTask, setNewTask] = useState<Partial<Task>>({
    title: "",
    description: "",
    assignee: "",
    priority: "medium",
    category: "",
    dueDate: "",
    tags: [],
  })

  const handleAddTask = () => {
    if (!newTask.title || !selectedColumn) return

    const task: Omit<Task, "id"> = {
      title: newTask.title || "",
      description: newTask.description || "",
      assignee: newTask.assignee || "",
      priority: newTask.priority || "medium",
      category: newTask.category || "",
      dueDate: newTask.dueDate || "",
      tags: newTask.tags || [],
    }

    onAddTask(task, selectedColumn)

    // Reset form
    setNewTask({
      title: "",
      description: "",
      assignee: "",
      priority: "medium",
      category: "",
      dueDate: "",
      tags: [],
    })
    setSelectedColumn("")
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
          <Plus className="w-4 h-4 mr-2" />
          Thêm Task
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Tạo Task Mới</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="title">Tiêu đề</Label>
            <Input
              id="title"
              value={newTask.title}
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
              placeholder="Nhập tiêu đề task..."
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Mô tả</Label>
            <Textarea
              id="description"
              value={newTask.description}
              onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
              placeholder="Mô tả chi tiết task..."
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="assignee">Người thực hiện</Label>
              <Input
                id="assignee"
                value={newTask.assignee}
                onChange={(e) => setNewTask({ ...newTask, assignee: e.target.value })}
                placeholder="Tên người thực hiện"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="column">Cột</Label>
              <Select value={selectedColumn} onValueChange={setSelectedColumn}>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn cột" />
                </SelectTrigger>
                <SelectContent>
                  {columns.map((column) => (
                    <SelectItem key={column.id} value={column.id}>
                      {column.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="priority">Độ ưu tiên</Label>
              <Select
                value={newTask.priority}
                onValueChange={(value: "low" | "medium" | "high") => setNewTask({ ...newTask, priority: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Thấp</SelectItem>
                  <SelectItem value="medium">Trung bình</SelectItem>
                  <SelectItem value="high">Cao</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="dueDate">Hạn chót</Label>
              <Input
                id="dueDate"
                type="date"
                value={newTask.dueDate}
                onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="category">Danh mục</Label>
            <Input
              id="category"
              value={newTask.category}
              onChange={(e) => setNewTask({ ...newTask, category: e.target.value })}
              placeholder="Ví dụ: Development, Design, Research..."
            />
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Hủy
          </Button>
          <Button onClick={handleAddTask}>Tạo Task</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
