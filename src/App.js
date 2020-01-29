import React from 'react'
import Header from './Components/Header/Header'
import Weather from './Components/Weather/Weather'
import './App.css'
const { appKey } = require('./config.json')

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            description: '',
            degrees: '',
            city: '',
            country: '',
            latitude: '',
            longitude: ''
        }
        this.fetchLocation()
        this.fetchWeather()
        
    }
    fetchLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoordinates)
        } else {
            console.log('Geolocation is not supported by this browser.')
        }
    }

    getCoordinates = position => {
        let latitude = position.coords.latitude.toFixed(3)
        let longitude = position.coords.longitude.toFixed(3)
        latitude = parseFloat(latitude)
        longitude = parseFloat(longitude)
        this.setState({
            latitude: latitude,
            longitude: longitude
        })

        console.log(latitude + ' ' + longitude)
        console.log(this.state)
    }

    fetchWeather = async () => {
        let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&units=metric&appid=${appKey}`
        console.log(weatherUrl)
        const apiCall = await fetch(weatherUrl)
        const weatherData = await apiCall.json()
        console.log(weatherData)
        console.log(weatherData.weather['0'].icon)
        this.setState({
            description: weatherData.weather['0'].description,
            city: weatherData.name,
            country: weatherData.sys.country,
            degrees: weatherData.main.temp
        })
    }

    render() {
        return (
            <div className="Hompage">
                <div className="homepageHeader">
                    <Weather
                        description={this.state.description}
                        city={this.state.city}
                        country={this.state.country}
                        temp={this.state.degrees}
                    />
                    <Header />
                </div>
            </div>
        )
    }
}

export default App
