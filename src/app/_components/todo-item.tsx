"use client";

import { Icon } from "@/core/components/icon";
import { Todo } from "../_domains/models/todo";
import { CheckBox } from "@/core/components/checkbox";
import { Action } from "@/core/components/action";
import { TASK_PRIORITY_EMOJI_MAP } from "../_domains/constants/task-priority-emoji-map";
import { Flex } from "@/core/components/flex";
import { useRouter } from "next/navigation";
import { todoController } from "../_applications/controllers/todo.controller";
import { supabaseBrowserClient } from "@/core/applications/services/supabase-browser";

export function TodoItem(props: Todo) {
  const supabase = supabaseBrowserClient();
  const router = useRouter();

  async function update(todo: Todo) {
    const { error } = await todoController.update(supabase, {
      ...todo,
      status: !todo.status,
    });

    if (error?.message) throw new Error(error.message);
    router.refresh();
  }

  async function remove(id: number) {
    const { error } = await todoController.delete(supabase, id);

    if (error?.message) throw new Error(error.message);
    router.refresh();
  }

  return (
    <div className="flex justify-between items-center gap-10">
      <div className="flex items-center gap-3 w-4/5">
        <div className="w-6">
          <Flex>
            <CheckBox check={props.status} onClick={() => update(props)} />
          </Flex>
        </div>
        <p
          title={props.title}
          className="text-lg max-w-fit text-ellipsis truncate overflow-hidden"
        >
          {props.title}
        </p>
        <span>{TASK_PRIORITY_EMOJI_MAP[props.priority]}</span>
      </div>

      <Action onClick={() => remove(props.id!)}>
        <Icon.X className="w-4 h-4 text-gray-400" />
      </Action>
    </div>
  );
}
