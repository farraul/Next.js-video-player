import Link from "next/link";
// import { trpc } from "../utils/trpc";

export default function HomePage() {
  // const hello = trpc.hello.useQuery({ text: "client" });
  // if (!hello.data) {
  //   return <div>Loading...</div>;
  // }

  return (
    <article>
      <main className="flex flex-col items-center p-24">
        <span className="text-5xl">Hola Mundo</span>

        <Link href={"/about"}>About Page</Link>
      </main>
    </article>
  );
}
