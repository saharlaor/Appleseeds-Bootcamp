import axios from "axios";

const algolia = axios.create({
  baseURL: "https://hn.algolia.com/api/v1/search",
});

export default algolia;
