fetch("https://clinicmanagers.runasp.net/weatherForecast")
  .then((res) => res.json())
  .then((res) => console.log(res));
