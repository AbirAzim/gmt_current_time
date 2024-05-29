function getTimeWithGMTValue(gmtOffsetData) {
  const absOffset = Math.abs(+gmtOffsetData);

  // Calculate hours and minutes from offset
  const hours = Math.floor(absOffset / 3600);
  const minutes = Math.floor((absOffset % 3600) / 60);

  // Determine sign based on original offset
  const sign = gmtOffsetData >= 0 ? '+' : '-';

  // Format hours and minutes with leading zeros
  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');

  const gmt = `${sign}${+formattedHours}.${+formattedMinutes}`;

  const gmtOffset = +gmt * 60; // GMT-4
  const currentDate = getCurrentDateWithGMTOffset(gmtOffset);
  return currentDate;
}

function getCurrentDateWithGMTOffset(gmtOffset) {
  const now = new Date();
  const gmtOffsetMilliseconds = gmtOffset * 60 * 1000; // Convert minutes to milliseconds
  const adjustedTime = new Date(now.getTime() + gmtOffsetMilliseconds);
  return adjustedTime;
}

// getTimeWithGMTValue(-14400)

let date = getTimeWithGMTValue(-14400);

date = new Date(date);

// Extract individual components in UTC
let year = date.getUTCFullYear();
let month = (date.getUTCMonth() + 1).toString().padStart(2, '0'); // Months are zero-based, so we add 1
let day = date.getUTCDate().toString().padStart(2, '0');
let hours = date.getUTCHours().toString().padStart(2, '0');
let minutes = date.getUTCMinutes().toString().padStart(2, '0');
let seconds = date.getUTCSeconds().toString().padStart(2, '0');

let formattedDateUTC = `${year}-${month}-${day} ${hours}:${minutes}:${seconds} UTC`;

console.log(formattedDateUTC);
