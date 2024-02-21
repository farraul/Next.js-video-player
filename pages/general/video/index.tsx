import { trpc } from "@/app/utils/trpc";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video player",
  description: "Tool video player",
};

export default function VideoPage() {
  console.log(trpc);
  console.log(trpc.hello);
  console.log(trpc.hello.useQuery);

  const hello = trpc.hello.useQuery({ text: "client" });
  console.log("hello:::", hello);

  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <p>{hello.data.greeting}</p>
    </div>
  );
}
