import { DICEBEAR_API } from "../constants/avatar-api";

type Props = {
  name: string;
  size?: "sm" | "md" | "lg";
};

const defaultClass =
  "bg-white rounded-full border border-gray-100 overflow-hidden";
const sizeMap = {
  sm: "w-10 h-10",
  md: "w-32 h-32",
  lg: "w-44 h-44",
};

export function Avatar({ name, size = "sm" }: Props) {
  return (
    <img
      className={`${defaultClass} ${sizeMap[size]}`}
      src={`${DICEBEAR_API}?seed=${name}`}
      alt={`${name}'s photo`}
      width={250}
      height={250}
    />
  );
}
