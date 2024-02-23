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
import { useState } from "react";

interface Video {
  title: string;
  description: string;
  url: string;
  id: string;
}

import { trpc } from "@/utils/trpc";

export default function Page() {
  const [videoSelected, setVideoSelected] = useState<Video>();
  const { data } = trpc.getVideos.useQuery();

  return (
    <article className="flex justify-center">
      <div className="w-full justify-center max-w-7xl ">
        <div className="flex justify-between flex-col">
          <Card className="w-full border-none mt-28">
            <CardHeader>
              <CardTitle>{videoSelected?.title || "seleciona"}</CardTitle>
            </CardHeader>
            <CardContent>
              <iframe
                width="100%"
                height="400"
                src={videoSelected?.url || ""}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
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
                className="flex flex-col justify-center items-center border-gray-200 border "
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
      </div>
    </article>
  );
}
