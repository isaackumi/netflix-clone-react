import axios from "axios";


// create a base url for the api endpoint
const instance = axios.create({

    baseURL: "https://api.themoviedb.org/3/",
}

);

export default instance;

// example if you want to hit a specific endpoint.... you call
// instance.get('/foo-bar)
// https://api.themoviedb.org/3/foo-bar