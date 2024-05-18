"use client";

import {
  Dialog,
  DialogTitle,
  DialogPanel,
  DialogDesc,
  DialogContent,
  useDialogRef,
} from "@/core/components/dialog";
import { CreateTodoFormField } from "./create-todo-form-field";
import { CreateTodoAction } from "./create-todo-action";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "@/core/components/button";

export function CreateTodoDialog() {
  const router = useRouter();
  const { ref, close, open } = useDialogRef();

  async function create(fd: FormData) {
    const res = await fetch("/create", {
      body: fd,
      method: "POST",
    });

    if (!res.ok) throw new Error("something went wrong");

    close();
    router.refresh();
  }

  return (
    <React.Fragment>
      <Dialog ref={ref}>
        <DialogPanel>
          <DialogTitle>Add task</DialogTitle>
          <DialogDesc>a fresh new task</DialogDesc>
          <form action={create}>
            <DialogContent>
              <CreateTodoFormField />
              <CreateTodoAction onCancelClicked={close} />
            </DialogContent>
          </form>
        </DialogPanel>
      </Dialog>

      <Button type="button" padding="sm" size="full" onClick={open}>
        add
      </Button>
    </React.Fragment>
  );
}
