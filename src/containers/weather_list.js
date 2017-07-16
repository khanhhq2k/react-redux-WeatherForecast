import React, { Component } from 'react';
import {connect} from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData){
    const name = cityData.city.name
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    //Handy es6 assignment syntax
    const {lon, lat} = cityData.city.coord;

    console.log(temps);
    return(
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color='red' unit='K'/></td>
        <td><Chart data={pressures} color='green' unit='hPa'/></td>
        <td><Chart data={humidities} color='blue' unit='%'/></td>
      </tr>
    );
  }
  render(){
    return(
      <table className='table table-hover'>
       <thead>
         <tr>
           <th>City</th>
           <th>Temp(K)</th>
           <th>Pressure(hPa)</th>
           <th>Humidity(%)</th>
         </tr>
       </thead>
       <tbody>
         {this.props.weather.map(this.renderWeather)}
       </tbody>
      </table>

    )
  }
}

function mapStateToProps({weather}){ //{weather} = state.weather, es6 syntax
  return {weather}; // {weather: weather} = {weather}
}

//export connected version of weatherlist container instead of weather list class
export default connect(mapStateToProps)(WeatherList);
