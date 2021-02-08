import React, { Component } from 'react';
import WatherInfo from './components/wather-info';
import WatherForm from './components/wather-form';
import './App.css';

class App extends Component {

  state = {
    temperature: '',
    description:'',
    city:'',
    country:'',
    wind_speed: '',
    error: null
  };

 getWather = async date => {
  date.preventDefault();
   const {city, country} =  date.target.elements;
   const cityValue = city.value;
   const countryValue = country.value;
   if(cityValue && countryValue ){
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=35aa6c8adc78c207e325b8aaac18dae1&units=metric`; 
    const result = await fetch(API);
    const data = await result.json();
    console.log(this.state);
     
     this.setState({
     temperature: data.main.temp,
     description: data.weather[0].description,
     wind_speed: data.wind.speed,
     city: data.name,
     country: data.sys.country,
     error: null
   });
   }else {
     this.setState({error: 'Por favor ingrese datos correctos'})
   }
  

  
 }

  render () {
    return (
        <div className="container p-4">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <WatherForm getWather={this.getWather}/>
              <WatherInfo {...this.state}/>
            </div>
          </div>
        </div>
      )
  }
}

export default App;
