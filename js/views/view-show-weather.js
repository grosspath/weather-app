showResults(data) {
  return (
         "<h2 style="font-weight: bold; font-size: 30px"; className="text-center">Current Weather for " + data.name + "</h2>" +
         "<h3>Weather: " + data.weather[0].main + "</h3>"+
         "<h3>Weather Conditions: " + data.weather[0].description + "</h3>"+
         "<h3>Temperature: " + data.main.temp + "&#8457;</h3>"+
         "<h3>Pressure: " + data.main.pressure + " Hpa</h3>"+
         "<h3>Humidity: " + data.main.humidity + "%</h3>"+
         "<h3>Low Temperature: " + data.main.temp_min + "&#8457;</h3>"+
         "<h3>High Temperature: " + data.main.temp_max + "&#8457;</h3>"+
         "<h3>Wind Speed: " + data.wind.speed + "m/s</h3>"+
         "<h3>Wind Direction: " + data.wind.deg + " &#8457;</h3>";
         )

 }
