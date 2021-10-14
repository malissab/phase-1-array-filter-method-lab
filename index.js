// Code your solution here
// array of drivers
function findMatching(array, string) {
    const matchingList = array.filter(function(driver){
       return (driver.toUpperCase() === string.toUpperCase())
    })

    return matchingList
}

function fuzzyMatch(array, string) {
    const match = array.filter(function(driver) {
        return (driver.charAt() === string.charAt())
    })
    return match
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
}