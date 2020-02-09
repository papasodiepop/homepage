import React from 'react'
const { google } = require('googleapis')
const { client_id, client_secret, redirect_uris } = require('../../config')
const calendarComponent = {
    dispaly: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    margin: '25px',
    width: '250px',
    backgroundColor: 'white',
    boxShadow: '0 3px 3px rgba(0, 0, 0, 0.16), 0 3px 3px rgba(0, 0, 0, 0.23)'
}

const border = {
    borderBottom: '2px solid black',
    width: '70%',
    margin: '0 auto'
}
const oauth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris
)

const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: 'https://www.googleapis.com/auth/calendar.readonly'
})

class Calendar extends React.Component {
    render() {
        return (
            <div style={calendarComponent}>
                <h1 style={{ margin: '0px' }}>Calendar</h1>
                <div style={border}></div>
                <div>
                    <h3>Work - 3pm</h3>
                    <h3>Cubs - 7pm</h3>
                    <h3>Gym - 2:45pm</h3>
                </div>
            </div>
        )
    }
}

export default Calendar
