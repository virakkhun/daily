"use client";

import { Button } from "@/core/components/button";
import {
  Dialog,
  DialogContent,
  DialogPanel,
  DialogTitle,
  useDialogRef,
} from "@/core/components/dialog";
import { Flex } from "@/core/components/flex";
import { Input } from "@/core/components/input";
import { SubmitButton } from "@/core/components/submit-button";
import { profile } from "console";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  name: string;
  children: React.ReactNode;
};

export function EditUsernameDialog(props: Props) {
  const { ref, close, open } = useDialogRef();
  const router = useRouter();

  async function update(fd: FormData) {
    if (isNameNotUpdate(fd)) {
      close();
      return;
    }

    const res = await fetch("/profile/actions", { body: fd, method: "POST" });
    if (!res.ok) throw new Error(res.statusText);

    close();
    router.refresh();
  }

  function isNameNotUpdate(fd: FormData) {
    const name = fd.get("name") as string;
    return props.name === name;
  }

  return (
    <React.Fragment>
      <Button intent="transparent" onClick={open}>
        {props.children}
      </Button>

      <Dialog ref={ref}>
        <DialogPanel>
          <DialogTitle>edit name</DialogTitle>
          <DialogContent>
            <form action={update}>
              <Input
                type="text"
                name="name"
                placeholder="name"
                defaultValue={props.name}
                required
              />

              <Flex width="full" justify="end" className="mt-6">
                <Button
                  type="button"
                  intent="transparent"
                  padding="sm"
                  onClick={close}
                >
                  close
                </Button>
                <SubmitButton>submit</SubmitButton>
              </Flex>
            </form>
          </DialogContent>
        </DialogPanel>
      </Dialog>
    </React.Fragment>
  );
}
