const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2)
}
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2)
}

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]
const createFareMultiplier = function (value1){
    const fareMultiplier = function (value2){
      return value1 * value2
    }
    return fareMultiplier
}

const fareDoubler = function(fare) {
    return fare * 2

}
const fareTripler = function(fare){
    return fare * 3
}

function selectDifferentDrivers(driversArray, selectFunction) {
    if (selectFunction === returnFirstTwoDrivers) {
      return driversArray.slice(0, 2);
    }else
    {
      return driversArray.slice(-2);
    }
  }
