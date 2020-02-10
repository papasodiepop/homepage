import React from 'react'
// const { google } = require('googleapis')
// const { client_id, client_secret, redirect_uris } = require('../../config')

const calendarComponent = {
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

const title = {
    fontSize: '.7em',
    color: 'black'
}

const border = {
    borderBottom: '2px solid black',
    width: '70%',
    margin: '0 auto'
}
// const oauth2Client = new google.auth.OAuth2(
//     client_id,
//     client_secret,
//     redirect_uris
// )

// const url = oauth2Client.generateAuthUrl({
//     access_type: 'offline',
//     scope: 'https://www.googleapis.com/auth/calendar.readonly'
// })

class Calendar extends React.Component {
    render() {
        return (
            <div style={calendarComponent}>
                <h1 style={{ margin: '0px', fontSize: '1em', color: 'black' }}>
                    Calendar
                </h1>
                <div style={border}></div>
                <div>
                    <p style={title}>Work - 3pm</p>
                    <p style={title}>Cubs - 7pm</p>
                    <p style={title}>Gym - 2:45pm</p>
                </div>
            </div>
        )
    }
}

export default Calendar
