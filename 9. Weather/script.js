const button = document.getElementById("search");
const input = document.getElementById("city");

const cityName = document.getElementById("location");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");
async function getData(cityName) {
  const promise = await fetch(`
  http://api.weatherapi.com/v1/current.json?key=c5b31f51d7d74348bb124939241001&q=${cityName}&aqi=yes`);
  return await promise.json();
}
button.addEventListener("click", async () => {
  // alert("clicked");
  // console.log(input.value);
  const value = input.value;
  const result = await getData(value);
  // console.log(result);
  cityName.innerText = `${result.location.name},${result.location.region}- ${result.location.country}`;
  cityTime.innerText = `${result.location.localtime}`;
  cityTemp.innerText = `${result.current.temp_c}`;
});
