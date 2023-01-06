function VideoDetail({ video }) {
  console.log(video);
  if (!video) {
    return <div>loading...</div>;
  } else {
    return (
      <div>
        <iframe
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          title={video.snippet.title}
          width="800"
          height="580"
        />
        <div className="border rounded-sm my-2">
          <h1 className="font-bold text-xl m-2">{video.snippet.title}</h1>
          <p className="m-2">{video.snippet.description}</p>
        </div>
      </div>
    );
  }
}
export default VideoDetail;
