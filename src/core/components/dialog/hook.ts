import { useEffect, useRef } from "react";
import { DialogRef } from "./type";

export function useDialogClickOutside(cb: () => void) {
  useEffect(() => {
    window.addEventListener("click", (e) => {
      const node = e.target as HTMLDivElement;

      if (node.role === "dialog") cb();
    });

    return window.removeEventListener("click", () => {});
  }, [cb]);
}

export function useDialogRef() {
  const ref = useRef<DialogRef>(null);

  return {
    ref,
    close: () => ref.current?.close(),
    open: () => ref.current?.open(),
  };
}
