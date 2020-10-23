import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID zXZnBKVfKyuxmSaRVbQhKjB3Km_hg4qsZqSZfcVUjhg",
  },
});
