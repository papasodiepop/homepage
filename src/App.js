import React from 'react'
import Header from './Components/Header/Header'
import Weather from './Components/Weather/Weather'
import Calendar from './Components/Calendar/Calendar'
import './App.css'
const { weatherKey } = require('./config.json')
const homepageHeader = {
    'background-color': '#153646',
    'min-height': '100vh',
    display: 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
    'font-size': 'calc(10px + 2vmin)',
    color: 'white'
}
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            latitude: '',
            longitude: '',
            description: 'Loading API...',
            degrees: 'Loading API...',
            city: 'Loading API...',
            country: ''
        }
        this.fetchLocation()
    }

    fetchLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoordinates)
        } else {
            console.log('Geolocation is not supported by this browser.')
        }
    }

    getCoordinates = async position => {
        return await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject)
            console.log(position)
            let latitude = position.coords.latitude.toFixed(3)
            let longitude = position.coords.longitude.toFixed(3)
            latitude = parseFloat(latitude)
            longitude = parseFloat(longitude)

            this.setState({
                latitude: latitude,
                longitude: longitude
            })
            this.fetchWeather()
            console.log(latitude + ' ' + longitude)
            console.log(this.state)
        })
    }

    fetchWeather = async () => {
        let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&units=metric&appid=${weatherKey}`
        const apiCall = await fetch(weatherUrl)
        const weatherData = await apiCall.json()
        console.log(weatherData)
        console.log(this.state)
        const intTemp = parseInt(weatherData.main.temp)
        this.setState({
            description: weatherData.weather['0'].description,
            city: weatherData.name,
            country: weatherData.sys.country,
            degrees: intTemp
        })
        console.log(weatherData)
    }

    render() {
        return (
            <div className="Homepage">
                <div className="HomepageTop">
                    <Calendar />
                    <Weather
                        description={this.state.description}
                        city={this.state.city}
                        country={this.state.country}
                        temp={this.state.degrees}
                    />
                </div>
                <div style={homepageHeader}>
                    <Header />
                </div>
            </div>
        )
    }
}

export default App
