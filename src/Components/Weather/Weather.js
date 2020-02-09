import React from 'react'

const weatherContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    textAlign: 'center'
}

const weather = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    margin: '25px',
    width: '250px',
    height: '200px',
    boxShadow: '0 3px 3px rgba(0, 0, 0, 0.16), 0 3px 3px rgba(0, 0, 0, 0.23)',
    color: 'rgb(20, 13, 13)',
    backgroundColor: 'aliceblue'
}

const weatherMargin = {
    margin: '5px'
}

const border = {
    borderBottom: '2px solid black',
    width: '70%',
    margin: '0 auto'
}

const Weather = props => {
    return (
        <div style={weatherContainer}>
            <div style={weather}>
                <h2 style={weatherMargin}>Weather</h2>
                <div style={border}></div>
                <h1 style={weatherMargin}>{props.temp}&deg;C </h1>
                <p>{props.description}</p>
                <p>
                    {props.city} {props.country}
                </p>
            </div>
        </div>
    )
}

export default Weather
