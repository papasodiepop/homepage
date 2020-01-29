import React from 'react'

const Weather = props => {
    return (
        <div>
            <h1>Weather</h1>
            <p>{props.description}</p>
            <p>
                {props.city}, {props.country}
            </p>
            <p>{props.temp}&deg;C </p>
        </div>
    )
}

export default Weather
