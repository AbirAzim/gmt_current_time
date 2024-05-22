const SunCalc = require('suncalc');
// Example latitude and longitude (San Francisco)
const latitude = 23.8041;
const longitude = 90.4152;

// Get current date
const currentDate = new Date();

// Calculate the current timestamp for the specified location
const times = SunCalc.getTimes(currentDate, latitude, longitude);
const currentTimestampForLocation = times.sunrise.getTime() + (currentDate.getTime() - times.sunrise.getTime()) / 2;

console.log("Current Timestamp for Location:", currentTimestampForLocation);

const date = new Date(currentTimestampForLocation);

// Convert the timestamp to human-readable time in local time zone
const timeString = date.toLocaleTimeString();

console.log(timeString)


// const timeString = format(new Date(timestamp), 'HH:mm:ss', { timeZone: 'Bangladesh/Dhaka' });

// console.log("Time in New York:", timeString);









