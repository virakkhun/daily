"use client";

import { Icon } from "@/core/components/icon";
import { Todo } from "../_domains/models/todo";
import { CheckBox } from "@/core/components/checkbox";
import { Action } from "@/core/components/action";
import { TASK_PRIORITY_EMOJI_MAP } from "../_domains/constants/task-priority-emoji-map";

type Props = Todo & { onToggle: () => void; onDelete: () => void };

export function TodoItem(props: Props) {
  return (
    <div className="flex justify-between items-center gap-10">
      <div className="flex items-center gap-3 w-4/5">
        <div className="w-6">
          <CheckBox check={props.status} onClick={props.onToggle} />
        </div>
        <p
          title={props.title}
          className="text-lg max-w-fit text-ellipsis truncate overflow-hidden"
        >
          {props.title}
        </p>
        <span>{TASK_PRIORITY_EMOJI_MAP[props.priority]}</span>
      </div>

      <Action onClick={props.onDelete}>
        <Icon.X className="w-4 h-4 text-gray-400" />
      </Action>
    </div>
  );
}
