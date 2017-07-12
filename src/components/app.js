import React, { Component } from 'react';

import SearhBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
export default class App extends Component {
  render() {
    return (
      <div>
        <SearhBar />
        <WeatherList />
      </div>
    );
  }
}
