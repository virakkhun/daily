import { Todo } from "@/app/_domains/models/todo";

export type TodoDTO = Omit<Todo, "id"> & { id?: number };
