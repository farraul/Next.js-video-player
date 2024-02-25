import { PlayList } from "@/components/PlayList";
import VideoPlayer from "@/components/VideoPlayer";

export default function Page() {
  return (
    <article className="flex justify-center">
      <section className="w-full justify-center max-w-7xl ">
        <VideoPlayer />
        <PlayList />
      </section>
    </article>
  );
}
