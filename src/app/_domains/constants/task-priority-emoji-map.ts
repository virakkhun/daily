import { TaskPriority } from "../models/task-priority.enum";

export const TASK_PRIORITY_EMOJI_MAP: Record<TaskPriority, string> = {
  [TaskPriority.LOW]: "☕️",
  [TaskPriority.MEDIUM]: "⚡️",
  [TaskPriority.HIGH]: "🔥",
};
