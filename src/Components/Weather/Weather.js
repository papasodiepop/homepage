import React from 'react'

const Weather = props => {
    return (
        <div className="weatherContainer">
            <div className="weather">
                <h2>Weather</h2>
                <div className="border"></div>
                <h1>{props.temp}&deg;C </h1>
                <p>{props.description}</p>
                <p>
                    {props.city} {props.country}
                </p>
            </div>
        </div>
    )
}

export default Weather
