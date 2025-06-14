import type { Column } from "@/types/task"

export const initialData: Column[] = [
  {
    id: "todo",
    title: "To Do",
    color: "bg-purple-100 border-purple-300",
    tasks: [
      {
        id: "1",
        title: "Thiết kế giao diện người dùng",
        description: "Tạo mockup và wireframe cho trang chủ",
        assignee: "Minh",
        priority: "high",
        category: "Design",
        dueDate: "2024-01-20",
        tags: ["UI/UX", "Figma"],
      },
      {
        id: "2",
        title: "Nghiên cứu công nghệ",
        description: "Tìm hiểu về React và Next.js",
        assignee: "Lan",
        priority: "medium",
        category: "Research",
        dueDate: "2024-01-22",
        tags: ["React", "Next.js"],
      },
    ],
  },
  {
    id: "doing",
    title: "Doing",
    color: "bg-blue-100 border-blue-300",
    tasks: [
      {
        id: "3",
        title: "Phát triển API backend",
        description: "Xây dựng REST API cho quản lý tasks",
        assignee: "Hùng",
        priority: "high",
        category: "Development",
        dueDate: "2024-01-25",
        tags: ["API", "Node.js"],
      },
    ],
  },
  {
    id: "done",
    title: "Done",
    color: "bg-green-100 border-green-300",
    tasks: [
      {
        id: "4",
        title: "Thiết lập dự án",
        description: "Khởi tạo repository và cấu hình môi trường",
        assignee: "An",
        priority: "low",
        category: "Setup",
        dueDate: "2024-01-15",
        tags: ["Git", "Setup"],
      },
    ],
  },
]
