
import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Nav from "./Nav"


function App() {
  return (
    <div className="App">
     <Nav />
     <Banner />

     <Row title="Top Rated Movies " 
     fetchUrl={requests.topRated}
     isLargeRow
     />
     <Row title="Week End Trend Movies." fetchUrl={requests.allWeekTrend}/>
     <Row title="Weekly Movie Trends" fetchUrl={requests.movieWeekTrend}/>
     <Row title="Weekly Tv Trends" fetchUrl={requests.weeklyMovieTrend}/>
     <Row title="Daily Tv Trends" fetchUrl={requests.tvDayTrend}/>
    </div>
  );
}

export default App;
