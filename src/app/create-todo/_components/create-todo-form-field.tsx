"use client";

import { TASK_PRIORITY_EMOJI_MAP } from "@/app/_domains/constants/task-priority-emoji-map";
import { TaskPriority } from "@/app/_domains/models/task-priority.enum";
import { Flex } from "@/core/components/flex";
import { Input } from "@/core/components/input";
import { InputRadio } from "@/core/components/input-radio";

export function CreateTodoFormField() {
  return (
    <Flex direction="col" justify="start" align="start" gap="md">
      <Input type="text" name="title" placeholder="task" required />
      <Flex>
        <InputRadio name="priority" anchor="high" value={TaskPriority.HIGH}>
          {TASK_PRIORITY_EMOJI_MAP[TaskPriority.HIGH]}
        </InputRadio>
        <InputRadio name="priority" anchor="medium" value={TaskPriority.MEDIUM}>
          {TASK_PRIORITY_EMOJI_MAP[TaskPriority.MEDIUM]}
        </InputRadio>
        <InputRadio name="priority" anchor="low" value={TaskPriority.LOW}>
          {TASK_PRIORITY_EMOJI_MAP[TaskPriority.LOW]}
        </InputRadio>
      </Flex>
    </Flex>
  );
}
