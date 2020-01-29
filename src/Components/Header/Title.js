import React from 'react'

const Title = () => {
    
    const titleChanger = (timeOfDayTitle) => {
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
            {titleChanger()}, Tom
        </div>
    )
}

export default Title
