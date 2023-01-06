import { render } from "@testing-library/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { KEY } from "./api/api";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";
import "./index.css";

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    handleTermSubmit("top videos");
  }, []);

  const handleTermSubmit = async (term) => {
    const url = `https://www.googleapis.com/youtube/v3/search`;
    const response = await axios.get(url, {
      params: {
        part: "snippet",
        maxResults: 5,
        key: KEY,
        q: term,
      },
    });

    console.log(response.data.items);
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="container mx-auto flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bond mt-3">Search Media</h1>
      <SearchBar handleTermSubmit={handleTermSubmit} />
      <div className="flex flex-row justify-center m-5 gap-5">
        <VideoDetail video={selectedVideo} />
        <VideoList videos={videos} handleVideoSelect={handleVideoSelect} />
      </div>
    </div>
  );
}

export default App;
