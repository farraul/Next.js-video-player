"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import UseAnimations from "react-useanimations";
import heart from "react-useanimations/lib/heart";
import { trpc } from "@/utils/trpc";
import ReactPlayer from "react-player";
import { PlayList } from "@/components/PlayList";

export default function Page() {
  const [videoSelected, setVideoSelected] = useState<Video>();
  const [checked, setChecked] = useState(true);
  const [progress, setProgress] = useState(0);
  let { data, refetch } = trpc.getVideos.useQuery();
  const likes = trpc.setLikes.useMutation();

  return (
    <article className="flex justify-center">
      <section className="w-full justify-center max-w-7xl ">
        <div className="flex justify-between flex-col">
          {videoSelected ? (
            <Card className="w-full border-none mt-28 bg-transparent text-white">
              <CardHeader className="bg-gray-900">
                <CardTitle className="text-center">
                  {videoSelected?.title || "Seleciona un video"}
                </CardTitle>
              </CardHeader>
              <CardContent
                className="relative"
                style={{ paddingTop: "56.25%" }}
              >
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${videoSelected?.id}`}
                  controls
                  className="absolute top-0 left-0"
                  width={"100%"}
                  height={"100%"}
                  playing
                  fallback={
                    <div className="flex h-full items-center justify-center">
                      <Progress value={progress} className="w-[60%]" />
                    </div>
                  }
                />
              </CardContent>
              <CardFooter>
                <CardDescription className="w-full mt-10 flex flex-row justify-between">
                  <div>{videoSelected?.description}</div>
                  <div className=" flex items-center">
                    {videoSelected && <span>{videoSelected.likes}</span>}
                    <button
                      onClick={() => {
                        if (videoSelected)
                          likes.mutate({ id: videoSelected.id });
                        setChecked(!checked);
                        refetch();
                      }}
                    >
                      <span className="text-3xl ml-2">❤️</span>
                    </button>
                  </div>
                </CardDescription>
              </CardFooter>
            </Card>
          ) : (
            <div className="text-center mt-52">
              <h1 className="text-5xl">Videoflix</h1>
              <p className="text-gray-500 mt-8">Selecciona video</p>
            </div>
          )}
        </div>
        <PlayList data={data} setVideoSelected={setVideoSelected} />
      </section>
    </article>
  );
}
