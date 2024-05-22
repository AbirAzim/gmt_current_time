function getCurrentDateWithGMTOffset(gmtOffset) {
  const now = new Date();
  const gmtOffsetMilliseconds = gmtOffset * 60 * 1000; // Convert minutes to milliseconds
  const adjustedTime = new Date(now.getTime() + gmtOffsetMilliseconds);
  return adjustedTime;
}


// const moment = require('moment-timezone');

// function getGMTOffset(city) {
//     const now = new Date();
//     const gmtOffset = moment.tz.zone(city).utcOffset(now);
//     return gmtOffset;
// }

// // Example usage
// const city = 'America/New_York'; // Example city
// const gmtOffset = getGMTOffset(city);

// console.log(`GMT offset for ${city}: ${gmtOffset} minutes`);

// Example usage: GMT offset for New York is -240 minutes (-4 hours)
const gmtOffsetForNewYork = 120; // GMT-4
const currentDateInNewYork = getCurrentDateWithGMTOffset(gmtOffsetForNewYork);
console.log('Current date and time in New York:', currentDateInNewYork);