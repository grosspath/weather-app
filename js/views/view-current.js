<div className="current">
  <ul>
    <li><a href="#">&#xf104;Search</a></li>
    <li>Current</li>
    <li><a href="#">Forecast&#xf105;</a></li>
  </ul>
</div>

  <div>

    <div className="container">
      <h2 className="text-center">{data.name}</h2>
      <h4 className="date text-center">{date}</h4>

      <div><img className="icon" src={"http://openweathermap.org/img/w/"+ weather[0].icon + ".png"}/></div>
      <h1>{main.temp}<span>&#176;</span></h1>
      <h3>{weather[0].main}</h3>
    </div>
    
  </div>

    <div className="container text-center current" id="showWeather">
      <h4>Humidity: <span className="data-results">{main.humidity}%</span></h4>
      <h3>High: {main.temp_max}&#8457;</h3>
      <h3>Low: {main.temp_min}&#8457;</h3>
      <h4>Pressure: <span className="data-results">{main.pressure}Hpa</span></h4>
      <h4>Wind Speed: <span className="data-results">{data.wind.speed}m/s</span></h4>
      <h4>Wind Direction: <span className="data-results">{data.wind.deg}</span></h4>
    </div>


api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}
