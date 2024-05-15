"use client";

import React, {
  ReactNode,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";
import { Flex } from "../flex";
import { createPortal } from "react-dom";
import { DialogRef } from "./type";
import { useDialogClickOutside } from "./hook";

type Props = {
  children: ReactNode;
};

export function DialogTitle(props: Props) {
  return <h1 className="font-semibold text-lg">{props.children}</h1>;
}

export function DialogDesc(props: Props) {
  return (
    <p className="font-normal text-gray-500 text-base">{props.children}</p>
  );
}

export function DialogContent(props: Props) {
  return (
    <div className="mt-4">
      <Flex direction="col" gap="md" justify="start" align="start">
        {props.children}
      </Flex>
    </div>
  );
}

export function DialogPanel(props: Props) {
  return <div className="px-6 py-4 rounded-md bg-white">{props.children}</div>;
}

export const Dialog = forwardRef<DialogRef, Props>((props, ref) => {
  const uuid = `dialog-${Math.floor(Math.random() * 1000)}`;
  const [_open, setOpen] = useState(false);

  function open() {
    setOpen(() => true);
  }

  function close() {
    setOpen(() => false);
  }

  useImperativeHandle(ref, () => ({ open, close }) as DialogRef);
  useDialogClickOutside(close);

  return (
    _open &&
    createPortal(
      <div
        role="dialog"
        className="fixed top-0 left-0 w-full h-svh bg-gray-900/20 flex justify-center items-center"
        ref={ref}
      >
        {props.children}
      </div>,
      document.body,
      uuid,
    )
  );
});
Dialog.displayName = "Dialog";
