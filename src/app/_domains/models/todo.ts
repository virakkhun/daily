import { TaskPriority } from "./task-priority.enum";

export type Todo = {
  id?: number;
  title: string;
  status: boolean;
  priority: TaskPriority;
};
