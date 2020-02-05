import React from 'react'
import firebase from '../firebase.js'

const provider = new firebase.auth.GoogleAuthProvider()
provider.addScope('https://www.googleapis.com/auth/calendar.events.readonly')
const auth = firebase.auth()

const calendarComponent = {
    width: '200px',
    backgroundColor: 'white'
}

class Calendar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null,
            token: null
        }

        this.login = this.login.bind(this)
        this.logout = () => {
            auth.signOut()
            document.location.reload(true)
        }
    }

    login() {
        auth.signInWithPopup(provider).then(result => {
            this.setState({
                user: result.user,
                token: result.credential.accessToken
            })
            console.log(result.credential.accessToken)
        })
    }

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            if (user) {
                this.setState({ user })
            }
        })
    }

    render() {
        let authButton = this.state.user ? (
            <button onClick={this.logout}>Log Out</button>
        ) : (
            <button onClick={this.login}>Log In</button>
        )
        let uploader = this.state.user ? (
            <p>test</p>
        ) : (
            <h4>Log in to use photo-loader</h4>
        )
        return (
            <div style={calendarComponent}>
                <h1 style={{ margin: '0px' }}>Calendar</h1>
                <div>
                    {authButton}
                    {uploader}
                </div>
            </div>
        )
    }
}

export default Calendar
