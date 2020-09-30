/*
this.stations
{
    Leyton: {
        Waterloo: {
            averageTime: int
            rides: int
        },
        Cambridge: {
            averageTime: int
            rides: int
        }
    }
}

this.currentRiders
{
    id: [station, timestamp],
    id: [station, timestamp],
}

*/


var UndergroundSystem = function() {
  this.currentRiders = {}
  this.stations = {}
};

/**
* @param {number} id
* @param {string} stationName
* @param {number} t
* @return {void}
*/
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
  this.currentRiders[id] = [stationName, t]
};

/**
* @param {number} id
* @param {string} stationName
* @param {number} t
* @return {void}
*/
UndergroundSystem.prototype.checkOut = function(id, endStation, t) {
  let rider = this.currentRiders[id]
  let startStation = rider[0]
  let timeTraveled = t - rider[1]
  if (this.stations[startStation]) {
      if (this.stations[startStation][endStation]) {
          let stationsObj = this.stations[startStation][endStation]
          let currTotalTime = stationsObj.rides * stationsObj.averageTime
          currTotalTime += timeTraveled
          stationsObj.rides++
          stationsObj.averageTime = currTotalTime / stationsObj.rides
      } else {
          this.stations[startStation][endStation] = {
              averageTime: timeTraveled,
              rides: 1
          }
      }
  } else {
      let stationObj = {}
      stationObj[endStation] = {
          averageTime: timeTraveled,
          rides: 1
      }
      this.stations[startStation] = stationObj
  }
  this.currentRiders[id] = null
};

/**
* @param {string} startStation
* @param {string} endStation
* @return {number}
*/
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
  return this.stations[startStation][endStation].averageTime
};

/**
* Your UndergroundSystem object will be instantiated and called as such:
* var obj = new UndergroundSystem()
* obj.checkIn(id,stationName,t)
* obj.checkOut(id,stationName,t)
* var param_3 = obj.getAverageTime(startStation,endStation)
*/
