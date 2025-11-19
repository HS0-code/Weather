document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("weather-input");
    const button = document.getElementById("weather-button");

    button.addEventListener("click", (e) => {
        e.preventDefault();
        const city = input.value.trim();

        if (!city) return alert("Please enter a city name.");


        const API_KEY = `19f5d9869bf3cb8e271bbfad6a388c5e`
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Imperial&appid=${API_KEY}`;

        fetch(url)
        .then((res) => res.json())
        .then((data)=>{
            if (data.cod !== 200){
                alert("City not found");
                return;
            }
            console.log(data)

            const weather = {
                city: data.name, 
                country: data.sys.country,
                temp: data.main.temp,
                desc: data.weather[0].description,
                icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,

            };

            console.log(weather);

            document.getElementById("city-output").textContent = `${weather.city}, ${weather.country}`;
document.getElementById("temp-output").textContent = `${weather.temp} °F`;
document.getElementById("weather-display").style.display = "block";
document.getElementById("main-output").textContent = `Main: ${data.weather[0].main}`;
document.getElementById("wind-output").textContent = `Wind Speed: ${data.wind.speed} mph`;
document.getElementById("visibility-output").textContent = `Visibility: ${data.visibility} m`;
        })
        .catch((err)=>{
            alert("Error fetching weather!");
        });
    });
});