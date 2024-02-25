"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

interface Video {
  title: string;
  description: string;
  url: string;
  id: string;
}

import { trpc } from "@/utils/trpc";
import ReactPlayer from "react-player";

export default function Page() {
  const [videoSelected, setVideoSelected] = useState<Video>();
  const { data } = trpc.getVideos.useQuery();

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <article className="flex justify-center">
      <section className="w-full justify-center max-w-7xl ">
        <div className="flex justify-between flex-col ">
          <Card className="w-full border-none mt-28 bg-gray-900 text-white">
            <CardHeader>
              <CardTitle>
                {videoSelected?.title || "Seleciona un video"}
              </CardTitle>
            </CardHeader>
            <CardContent className="relative" style={{ paddingTop: "56.25%" }}>
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
              <CardDescription>
                {videoSelected?.description || ""}
              </CardDescription>
            </CardFooter>
          </Card>
        </div>

        {data?.status.length === 0 ? (
          <p className="text-center">No videos Found</p>
        ) : (
          <div className="flex justify-center">
            {data?.data.videosList.videos?.map((video) => (
              <div
                key={video.id}
                className="border-gray-500 border mx-5 cursor-pointer rounded-xl p-2 mt-10"
                onClick={() => setVideoSelected(video)}
              >
                <Image
                  src={`https://i.ytimg.com/vi/${video.id}/default.jpg`}
                  alt={video.title}
                  width={180}
                  height={180}
                  className="block"
                />
              </div>
            ))}
          </div>
        )}
      </section>
    </article>
  );
}
