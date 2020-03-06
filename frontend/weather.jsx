import React from 'react';
import { timingSafeEqual } from 'crypto';

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      temp: '',
      loaded: false
    };
  }

  componentDidMount() {
    let self = this;
    navigator.geolocation.getCurrentPosition(function(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      let request = new XMLHttpRequest();
      request.open(
        'GET',
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appID=${process.env.API_KEY}&units=imperial`,
        true
      );

      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          let data = JSON.parse(request.response);
          self.setState({
            city: data.name,
            temp: data.main.temp,
            loaded: true
          });
        } else {
          console.log('something failed');
        }
      };

      request.onerror = function() {
        console.log('There was a connection error');
      };

      request.send();
    });
  }

  render() {
    return (
      <div className='weather-container'>
        <h1>Weather</h1>
        <div className='weather'>
          <p>{this.state.loaded ? this.state.city : 'Loading...'}</p>
          <p>{this.state.loaded ? this.state.temp + ' degrees' : ''}</p>
        </div>
      </div>
    );
  }
}

export default Weather;
