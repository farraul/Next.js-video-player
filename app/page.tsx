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

export default function Home() {
  const [videoSelected, setVideoSelected] = useState<Video>();

  const { data } = trpc.getVideos.useQuery();
  console.log("data:::", data);

  return (
    <article className="min-h-screen ">
      <div className="flex justify-between ">
        <Card className="w-full">
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
              Deploy your new project in one-click.
            </CardDescription>
          </CardFooter>
        </Card>
      </div>

      {data?.status.length === 0 ? (
        <p className="text-center">No videos Found</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: 20,
          }}
        >
          {data?.data.videosList.videos?.map((video) => (
            <div
              key={video.id}
              className="flex flex-col justify-center items-center border-gray-200 border"
              onClick={() => setVideoSelected(video)}
            >
              <Image
                src={`https://i.ytimg.com/vi/${video.id}/default.jpg`}
                alt={video.title}
                width={180}
                height={180}
                className="block"
              />
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}
