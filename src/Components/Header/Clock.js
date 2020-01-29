const Clock = () => {
    let currentTime = new Date()

    let currentHours = currentTime.getHours()
    let currentMinutes = currentTime.getMinutes()

    currentMinutes = (currentMinutes < 10 ? '0' : '') + currentMinutes
    let timeOfDay = currentTime < 12 ? 'AM' : 'PM'
    currentHours = (currentHours < 10 ? '0' : '') + currentHours
    currentHours = currentHours === 0 ? 12 : currentHours

    let currentTimeString =
        currentHours + ':' + currentMinutes + ' ' + timeOfDay
    return currentTimeString
}

export default Clock
