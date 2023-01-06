import { format } from "date-fns";
function VideoItem({ video, handleVideoSelect }) {
  const date = video.snippet.publishedAt.split("T")[0];
  const splitDate = date.split("-");
  const year = Number(splitDate[0]);
  const month = Number(splitDate[1]);
  const day = Number(splitDate[2]);
  const formattedDate = format(new Date(year, month, day), "dd/MM/yyyy");

  return (
    <div
      className="border-b rounded-md flex flex-row items-center hover:cursor-pointer"
      key={video.etag}
      onClick={() => handleVideoSelect(video)}
    >
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
        className="h-24 mb-2"
      />

      <div className="mx-2">
        <h1 className="text-xs font-bold">{video.snippet.title}</h1>
        <p className="text-xs">{video.snippet.channelTitle}</p>
        <p className="text-xs">{formattedDate} </p>
      </div>
    </div>
  );
}

export default VideoItem;
