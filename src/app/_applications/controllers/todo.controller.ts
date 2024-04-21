import { todoAPI } from "@/app/_infrastructure/apis/todo.api";
import { TodoDTO } from "@/app/_infrastructure/dto/todo.dto";
import { SupabaseClient } from "@supabase/supabase-js";

export const todoController = {
  getTodos: (s: SupabaseClient) => {
    return todoAPI.getTodos(s);
  },
  createTodo: (s: SupabaseClient, dto: TodoDTO) => {
    return todoAPI.createTodo(s, dto);
  },
};
