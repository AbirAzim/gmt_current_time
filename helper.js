function getCurrentDate(latitude, longitude) {
  // Get current date
  const currentDate = new Date();

  // Get UTC offset in minutes
  const utcOffsetMinutes = currentDate.getTimezoneOffset();

  // Convert latitude and longitude to time zone offset in hours
  // This is a simple approximation and may not be accurate for all locations
  const timeZoneOffsetHours = (longitude / 15);

  // Calculate the total time zone offset in minutes
  const totalOffsetMinutes = utcOffsetMinutes + (timeZoneOffsetHours * 60);

  // Calculate the current time in milliseconds
  const currentTimeMillis = currentDate.getTime() + (totalOffsetMinutes * 60 * 1000);

  // Create a new Date object with the current time
  const currentDateAtLocation = new Date(currentTimeMillis);

  // Return the current date at the specified location
  return currentDateAtLocation;
}

// Example usage
const latitude = 28.7041;
const longitude = 77.1025;

const currentDate = getCurrentDate(latitude, longitude);
console.log('Current date at specified location:', currentDate.getHours(), currentDate.getMinutes());