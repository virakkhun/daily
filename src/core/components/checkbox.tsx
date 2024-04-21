"use client";

import { Icon } from "./icon";

type Props = {
  check: boolean;
};

export function CheckBox(props: Props) {
  const defaultClass = "w-5 h-5 border-gray-400 border-2 rounded-full";
  const isCheck = props.check && "flex justify-center items-center bg-gray-400";

  return (
    <div className={`${isCheck} ${defaultClass}`}>
      {props.check && <Icon.Tick className="w-3 h-3 text-white" />}
    </div>
  );
}
