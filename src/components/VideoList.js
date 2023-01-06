import VideoItem from "./VideoItem";

function VideoList({ videos, handleVideoSelect }) {
  const renderedVideos = videos.map((video) => {
    return (
      <VideoItem
        video={video}
        key={video.etag}
        className="border rounded-md flex flex-row"
        handleVideoSelect={handleVideoSelect}
      />
    );
  });
  return <div>{renderedVideos}</div>;
}

export default VideoList;
