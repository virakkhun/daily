import { TodoDTO } from "../dto/todo.dto";
import { SupabaseClient } from "@supabase/supabase-js";

export const todoAPI = {
  getTodos: (s: SupabaseClient) => {
    return s
      .from("todos")
      .select<"id,title,status", TodoDTO>("id,title,status");
  },
  createTodo: (s: SupabaseClient, dto: TodoDTO) => {
    return s.from("todos").insert(dto);
  },
  update: (s: SupabaseClient, dto: TodoDTO) => {
    return s.from("todos").update(dto).eq("id", `${dto.id}`);
  },
  delete: (s: SupabaseClient, id: number) =>
    s.from("todos").delete().eq("id", `${id}`),
};
