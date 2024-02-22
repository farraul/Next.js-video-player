import { TRPCError } from "@trpc/server";
import videosList from "@/stubs/videos.json";

export const getVideosHandler = async () =>
  // {filterQuery,}: { filterQuery: any;}
  {
    try {
      //   const { limit, page } = filterQuery;
      //   const take = limit || 10;
      //   const skip = (page - 1) * limit;

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
