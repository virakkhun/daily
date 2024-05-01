import { todoAPI } from "@/app/_infrastructure/apis/todo.api";
import { TodoDTO } from "@/app/_infrastructure/dto/todo.dto";
import { SupabaseClient } from "@supabase/supabase-js";

export const todoController = {
  getTodos: async (s: SupabaseClient) => {
    const {
      data: { user },
    } = await s.auth.getUser();
    return todoAPI.getTodos(s, user?.id!);
  },
  createTodo: async (s: SupabaseClient, dto: TodoDTO) => {
    const {
      data: { user },
    } = await s.auth.getUser();
    return todoAPI.createTodo(s, dto, user?.id!);
  },
  update: (s: SupabaseClient, dto: TodoDTO) => {
    return todoAPI.update(s, dto);
  },
  delete: (s: SupabaseClient, id: number) => todoAPI.delete(s, id),
};
