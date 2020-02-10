import React from 'react'
const TitleMargin = {
    marginTop: '30%',
    marginBottom: '0px'
}
const Title = () => {
    const titleChanger = timeOfDayTitle => {
        timeOfDayTitle = 'Good Afternoon'
        let currentHours = new Date().getHours()
        if (currentHours <= 12) {
            timeOfDayTitle = 'Good Morning'
        } else if (currentHours >= 17) {
            timeOfDayTitle = 'Good Evening'
        }
        return timeOfDayTitle
    }
    return (
        <div>
            <p style={TitleMargin}>{titleChanger()}, Tom</p>
        </div>
    )
}

export default Title
