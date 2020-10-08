var minMeetingRooms = function(intervals) {
  /*
      sort the intervals => by start time
      keep track of meeting rooms in array of arrays
      loop through sorted intervals {
          if meeting can fit into the availability of one of the rooms, change end time for that room
          else, create new room with the avail
      return meetingRooms.length

      separate func for checking which room can fit in

      meetingRoomAvail = (meetingRooms, meeting) => {
          for (let i = 0; i < meetingRooms.length; i++) {
              meetingRoom = meetingRooms[i]
              if (meeting[0] > meetingRoom[1] {
                  meetingRoom[1] === meeting[1]
                  return
              }
          }
          meetingRooms.push(meeting)
      }
      }
  */

  intervals.sort((a,b) => {
      if (a[0] < b[0]) return -1
      if (a[0] > b[0]) return 1
      if (a[0] === b[0]) {
          if (a[1] < b[1]) return -1
          if (a[1] > b[1]) return 1
          return 0
      }
  })

  let meetingRooms = []

  for (let i = 0; i < intervals.length; i++) {
      meetingRoomScheduler(meetingRooms, intervals[i])
  }
  return meetingRooms.length
};

var meetingRoomScheduler = function(meetingRooms, meeting) {
  for (let i = 0; i < meetingRooms.length; i++) {
      let meetingRoom = meetingRooms[i]
      if (meeting[0] >= meetingRoom[1]) {
          meetingRoom[1] = meeting[1]
          return
      }
  }
  meetingRooms.push(meeting)
}
