
{/* type Task  */ }
type Task = {
  id: number;
  title: string;
  completed: boolean;
};
type TaskListProps = {
  tasks: Task[];
};
export default function TaskList({
  tasks,
}: 
TaskListProps) {
  return (
    <section className="max-w-2xl mx-auto p-6">
  <h2 className="text-3xl font-bold mb-6">
    Task List
    </h2>
  <ul className="space-y-3">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex items-center justify-between p-4 border rounded-lg shadow-sm"
          >
          <span
            className={task.completed
              ? "line-through text-gray-500"
              : "text-gray-900"
            }
          >
            {task.title}
          </span>
          <span
            className={`px-3 py-1 rounded-full text-sm ${
                task.completed
              ? 'bg-green-100 text-green-800'
              : 'bg-yellow-100 text-yellow-800'
            }`}
            >
            {task.completed ? 'Completed' : 'Pending'}
        </span>
            </li>
  ))}
  </ul>
  </section>
      );      
}

