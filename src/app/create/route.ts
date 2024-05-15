import { createClient } from "@/core/applications/services/supabase";
import { NextRequest, NextResponse } from "next/server";
import { TaskPriority } from "../_domains/models/task-priority.enum";
import { TodoDTO } from "../_infrastructure/dto/todo.dto";
import { todoController } from "../_applications/controllers/todo.controller";
import { cookies } from "next/headers";

export async function POST(next: NextRequest) {
  const supabase = createClient(cookies());
  const form = await next.formData();

  const todo = {
    title: form.get("title"),
    status: false,
    priority: form.get("priority") ?? TaskPriority.MEDIUM,
  };
  const { error } = await todoController.createTodo(supabase, todo as TodoDTO);

  if (error?.message) throw new Error(error.message);

  return NextResponse.json(null, { status: 200 });
}
