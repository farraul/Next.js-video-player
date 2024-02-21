import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video player",
  description: "Tool video player",
};

export default function VideosPage() {
  return (
    <div>
      <span className="text-7xl">Videos page</span>
    </div>
  );
}
