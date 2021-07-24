import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-challenge-629de.cloudfunctions.net/api",
  //"http://localhost:5001/challenge-629de/us-central1/api", //THE API (teh cloud function) URL
});

export default instance;

//https://us-central1-challenge-629de.cloudfunctions.net/api
