import { TRPCError } from "@trpc/server";
import videosList from "@/stubs/videos.json";

export const getVideosHandler = async () => {
  try {
    return {
      status: "success",
      results: videosList.videos.length,
      data: {
        videosList,
      },
    };
  } catch (err: any) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: err.message,
    });
  }
};

export const setLike = async (id: string) => {
  try {
    const videoSelected = videosList.videos.find((e) => e.id == id);
    if (videoSelected) videoSelected.likes = videoSelected.likes + 1;

    return {
      status: "success",
      results: videosList.videos.length,
      data: {
        videosList,
      },
    };
  } catch (err: any) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: err.message,
    });
  }
};
