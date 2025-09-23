const temperature = 40;   
const windSpeed   = 10;  

 
function calculateWindChill(tempF, speedMph) {
  return (35.74 + 0.6215 * tempF
          - 35.75 * Math.pow(speedMph, 0.16)
          + 0.4275 * tempF * Math.pow(speedMph, 0.16)).toFixed(1);
}

 
document.addEventListener("DOMContentLoaded", () => {
  const windchillEl = document.getElementById("windchill");
  let displayValue = "N/A";

   
  if (temperature <= 50 && windSpeed > 3) {
    displayValue = calculateWindChill(temperature, windSpeed) + " °F";
  }

  windchillEl.textContent = displayValue;
});
