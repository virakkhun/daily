import { TodoDTO } from "../dto/todo.dto";
import { SupabaseClient } from "@supabase/supabase-js";

export const todoAPI = {
  getTodos: (s: SupabaseClient, userId: string) => {
    return s
      .from("todos")
      .select<"id,title,status,priority", TodoDTO>("id,title,status,priority")
      .eq("profile_id", userId)
      .order("created_at", { ascending: false });
  },
  createTodo: (s: SupabaseClient, dto: TodoDTO, userId: string) => {
    return s.from("todos").insert({ ...dto, profile_id: userId });
  },
  update: (s: SupabaseClient, dto: TodoDTO) => {
    return s.from("todos").update(dto).eq("id", `${dto.id}`);
  },
  delete: (s: SupabaseClient, id: number) =>
    s.from("todos").delete().eq("id", `${id}`),
};
