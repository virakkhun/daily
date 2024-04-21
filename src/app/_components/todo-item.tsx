"use client";

import { Todo } from "../_domains/models/todo";
import { CheckBox } from "@/core/components/checkbox";

export function TodoItem(props: Todo) {
  return (
    <div className="flex justify-between items-center gap-10">
      <div className="flex items-center gap-3">
        <CheckBox check={props.status} />
        <p className="text-lg">{props.title}</p>
      </div>
    </div>
  );
}

// <Icon.EllipsisHorizontal className="w-5 h-5 text-gray-400" />
