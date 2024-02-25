import { create } from "zustand";

export type playList = {
  videos: Video[];
};

interface VideoState {
  videoSelected?: Video;
  playList?: playList;

  setPlaylist: (playList: playList) => void;
  setVideoSelected: (video: Video) => void;
}

export const useVideoStore = create<VideoState>((set) => ({
  videoSelected: undefined,
  playList: undefined,
  setPlaylist: (playList) => set((state) => ({ playList })),
  setVideoSelected: (video) => set((state) => ({ videoSelected: video })),
}));
