"use client";
import { useVideoStore } from "@/store/videoStore";
import Image from "next/image";
import { useEffect } from "react";
import { playList } from "@/store/videoStore";
import { trpc } from "@/utils/trpc";

export const PlayList = () => {
  const { setVideoSelected, playList, setPlaylist } = useVideoStore();

  let { data } = trpc.getVideos.useQuery();

  useEffect(() => {
    setPlaylist(data?.data.videosList as playList);
  }, [data]);
  return (
    <>
      {!playList?.videos || playList?.videos.length === 0 ? (
        <p className="text-center">No videos Found</p>
      ) : (
        <div className="flex justify-center">
          {playList?.videos.map((video: Video) => (
            <div
              key={video.id}
              className="border-gray-500 border mx-5 cursor-pointer rounded-xl p-2 mt-10"
              onClick={() => {
                setVideoSelected(video);
              }}
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
    </>
  );
};
