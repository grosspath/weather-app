import React from 'react';
import $ from 'jquery';

class WeatherData extends React.Component {

  componentDidMount() {
    this.WeatherData();
  }

  WeatherData() {
  //   return $(document).ready(function() {
  //     $("#submitCity").click(function() {
  //       return getWeather();
  //     });
  //   });
  // }
  //
  //
  //   getWeather() {
      // let zip = $("#zip").val();
      // if(zip !== '') {
      let zip = 29492;
        $.ajax({
          url: "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + "&units=imperial" +
          "&APPID=5a0a6375811682ebe5a52b25954cbcf6" + ",us",
          type: "GET",
          dataType: "jsonp",
          success: function(data) {
            console.log(data);
            // let widget = showResults(data);
            //
            // $("#showWeather").html(widget);
            // $("#zip").val("");
          // }
        }
      //   else {
      //   $("#error").html(
      //     "<div className='alert alert-danger' id='errorZip'><a href='#' className='close' data-dismiss='alert' aria-label='close'>&times;</a>Zip code cannot be empty</div>"
      //   )
      // }
    })
  }

    render() {
      return (
        <div>
          Found something
        </div>
      )
    }
}

export default WeatherData;
