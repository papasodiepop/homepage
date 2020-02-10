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
    justifyContent: 'space-around',
    alignItem: 'center',
    textAlign: 'center',
    margin: '25px',
    width: '250px',
    height: '200px',
    boxShadow: '0 3px 3px rgba(0, 0, 0, 0.16), 0 3px 3px rgba(0, 0, 0, 0.23)',
    color: 'rgb(20, 13, 13)',
    backgroundColor: 'aliceblue',
    borderRadius: '5px'
}

const weatherTitle = {
    margin: '0px',
    fontSize: '1em'
}

const weatherText = {
    margin: '5px',
    fontSize: '.7em'
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
                <h2 style={weatherTitle}>Weather</h2>
                <div style={border}></div>
                <h1 style={{ fontSize: '1.5em', margin: '0px' }}>
                    {props.temp}&deg;C{' '}
                </h1>
                <p style={weatherText}>{props.description}</p>
                <p style={weatherText}>
                    {props.city} {props.country}
                </p>
            </div>
        </div>
    )
}

export default Weather
