import { TodoDTO } from "../dto/todo.dto";
import { SupabaseClient } from "@supabase/supabase-js";

export const todoAPI = {
  getTodos: (s: SupabaseClient) => {
    return s.from("todos").select<"title,status", TodoDTO>("title,status");
  },
  createTodo: (s: SupabaseClient, dto: TodoDTO) => {
    return s.from("todos").insert(dto);
  },
};
