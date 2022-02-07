let elInput = document.querySelector(".input");
let elForm = document.querySelector(".form");
let newWeath = document.querySelector(".weather-card");
let elHeding = document.querySelector(".text-light");


const renderElement = function(data) {
    let celsiy = Math.round(data.main.temp) - 273;
    const html = `
  <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
  <div class="card-header">City: ${data.name} (${data.sys.country})</div>
  <div class="card-body">
    <h5 class="card-title"><i class="bi bi-thermometer-half"></i> ${celsiy} °C</h5> 

    <img class="img-icon" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">

    <div class="box">
      <p>
      <i class="bi bi-wind"></i>  Wind: ${data.wind.speed} km/h
      </p>

      <p>
      <i class="bi bi-moisture"></i>  Desc: ${data.weather[0].description}
      </p>
    </div>
  </div>
  </div>
  `

    newWeath.insertAdjacentHTML('beforeend', html);
}

const API_KEY = "971a0ed0814ee561a4283798212060c3";

const weather = async function(country) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${API_KEY}`)

        const data = await response.json();

        renderElement(data);
        console.log(data);
    } catch {
        alert(`Kechirasiz ${country} ob-havosi bo'yicha hechqanday malumot topilmadi`)
    }
}


elForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let inputValue = elInput.value;
    inputValue.value = null;
    weather(`${inputValue}`);
})