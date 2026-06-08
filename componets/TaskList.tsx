
  {/* type Task  */}
  type Task={
    id:number;
    title:string;
    completed:boolean;
  };
  type TaskListProps={
    tasks:Task[];
  };
  export default function TaskList({tasks}:
    TaskListProps){
      return(
        <div>
          <h2 className="text-3xl font-bold mb-4">Task List</h2>
          <ul className="list-disc pl-5">
            {tasks.map((task)=>(
              <li key={task.id} className={task.completed ? 'line-through text-gray-500' : ''}>
                {task.title}
              </li>
            ))}
          </ul>
        </div>
      );
    }

