import { getVideosHandler } from "./video-controller";
import { t } from "@/utils/trpc-server";

const videoRouter = t.router({
  // .input(filterQuery)

  getVideos: t.procedure.query(() => getVideosHandler()),
});

export default videoRouter;
