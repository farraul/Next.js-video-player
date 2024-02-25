import Image from "next/image";

export const PlayList = ({ data, setVideoSelected }: any) => {
  return (
    <>
      {data?.status.length === 0 ? (
        <p className="text-center">No videos Found</p>
      ) : (
        <div className="flex justify-center">
          {data?.data.videosList.videos?.map((video: Video) => (
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
