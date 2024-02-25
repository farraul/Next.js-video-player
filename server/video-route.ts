import { getVideosHandler, setLike } from "./video-controller";
import { t } from "@/utils/trpc-server";
import { z } from "zod";

const videoRouter = t.router({
  getVideos: t.procedure.query(() => getVideosHandler()),
  setLikes: t.procedure
    .input(z.object({ id: z.string() }))
    .mutation((opts) => setLike(opts.input.id)),
});

export default videoRouter;
