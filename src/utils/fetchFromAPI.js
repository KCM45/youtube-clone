import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "48f53e2384msh2f80c20842f8666p16c26djsnd02b3c509164", // process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}

export async function fetchFromAPI(url) {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
}
