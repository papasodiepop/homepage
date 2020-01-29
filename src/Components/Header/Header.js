import React from 'react'
import Title from './Title'
import Search from './Search'
import Clock from './Clock'

class Header extends React.Component {
    state = {
        time: Clock()
    }
    render() {
        return (
            <div>
                <h1 className="homepageTitle">
                    <Title />
                </h1>
                <p className="clock">
                    <Clock />
                </p>
                <Search className="Search" />
            </div>
        )
    }

    componentDidMount() {
        this.interval = setInterval(
            () => this.setState({ time: Clock() }),
            1000
        )
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
}

export default Header
