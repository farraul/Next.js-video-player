import { create } from "zustand";

interface VideoState {
  videoSelected?: Video;
}

export const useVideoStore = create<VideoState>((set) => ({
  videoSelected: undefined,
}));
