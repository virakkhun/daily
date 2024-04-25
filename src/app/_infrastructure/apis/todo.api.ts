import { TodoDTO } from "../dto/todo.dto";
import { SupabaseClient } from "@supabase/supabase-js";

export const todoAPI = {
  getTodos: (s: SupabaseClient) => {
    return s
      .from("todos")
      .select<"id,title,status", TodoDTO>("id,title,status")
      .eq("profile_id", "8ad1366e-4cab-4e8f-87db-126fe278a3c7");
  },
  createTodo: (s: SupabaseClient, dto: TodoDTO) => {
    return s
      .from("todos")
      .insert({ ...dto, profile_id: "8ad1366e-4cab-4e8f-87db-126fe278a3c7" });
  },
  update: (s: SupabaseClient, dto: TodoDTO) => {
    return s.from("todos").update(dto).eq("id", `${dto.id}`);
  },
  delete: (s: SupabaseClient, id: number) =>
    s.from("todos").delete().eq("id", `${id}`),
};
