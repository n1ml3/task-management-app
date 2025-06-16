# Task Management App

A modern and intuitive Kanban-style task management application built with Next.js 14, featuring real-time updates and a sleek user interface.

## 🚀 Live Demo

[View Demo](https://task-management-demo.vercel.app) _(Replace with your actual demo link)_

## ✨ Features

- **📋 Kanban Board**
  - Drag-and-drop interface
  - Column customization
  - Task filtering and sorting

- **📝 Task Management**
  - Create, edit, and delete tasks
  - Priority levels (High, Medium, Low)
  - Due date tracking
  - Task categories and tags
  - File attachments
  - Task comments and activity history

- **👥 Collaboration**
  - Task assignment
  - Team member management
  - Real-time updates
  - Activity notifications

- **🎨 UI/UX**
  - Responsive design
  - Dark/Light theme
  - Customizable layouts
  - Keyboard shortcuts

## 🛠️ Tech Stack

- **Frontend**
  - Next.js 14
  - TypeScript
  - Tailwind CSS
  - @hello-pangea/dnd
  - Radix UI
  - Lucide React Icons

- **State Management**
  - Zustand
  - React Query

- **Authentication**
  - NextAuth.js

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn
- PostgreSQL database

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/task-management-app.git
   cd task-management-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Update `.env` with your database and authentication credentials.

4. **Run database migrations**
   ```bash
   npx prisma migrate dev
   ```

5. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
task-management-app/
├── app/                   # Next.js app router pages
├── components/           # React components
│   ├── layout/          # Layout components
│   ├── modals/          # Modal dialogs
│   ├── task-board/      # Kanban board components
│   ├── task-card/       # Task card components
│   └── ui/              # Reusable UI components
├── lib/                 # Utility functions
├── prisma/              # Database schema and migrations
├── public/              # Static assets
└── types/              # TypeScript definitions
```

## 🔑 Key Features Explained

### Kanban Board
- Intuitive drag-and-drop interface
- Customizable columns and workflows
- Real-time updates using WebSocket

### Task Management
- Rich text editor for task descriptions
- File upload support
- Advanced filtering and sorting options

### Authentication & Authorization
- Secure user authentication
- Role-based access control
- Team management

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)
- [@hello-pangea/dnd](https://github.com/hello-pangea/dnd)

## 📧 Contact

Your Name - [@NamL96279699](https://x.com/NamL96279699)

Project Link: [https://github.com/n1ml3/task-management-app](https://github.com/n1ml3/task-management-app)

![image](https://github.com/user-attachments/assets/a327633a-db27-4bdd-a916-75676ebb71e0)
