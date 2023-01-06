import axios from "axios";

export const KEY = "AIzaSyDnThA6mMGq4S-c4D8VU4mgy3B8M-GiWvw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
