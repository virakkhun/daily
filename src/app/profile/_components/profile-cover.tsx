import Image from "next/image";

type Props = {
  imageUrl: string;
};

export function ProfileCover(props: Props) {
  return (
    <Image
      className="rounded-bl-lg rounded-br-lg w-full h-64 object-cover aspect-video"
      width={1920}
      height={1080}
      src={props.imageUrl}
      alt="cover photo"
    />
  );
}
