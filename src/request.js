const API_KEY = "65a2f31bd66b78389878cea16024e018";


const requests = {
    allWeekTrend: `/trending/all/week?api_key=${API_KEY}`,
    movieWeekTrend: `/trending/movie/week?api_key=${API_KEY}`,
    tvDayTrend: `/trending/tv/day?api_key=${API_KEY}`,
    weeklyMovieTrend: `/trending/tv/day?api_key=${API_KEY}`,
    topRated: `movie/top_rated?api_key=${API_KEY}`
}

export default requests;