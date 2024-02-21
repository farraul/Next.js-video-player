import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video player",
  description: "Tool video player",
};

export default function VideoPage() {
  return (
    <div>
      <span className="text-7xl">Video Page</span>
    </div>
  );
}
