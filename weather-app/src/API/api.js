const apiKey = 'f27b269d54e4fa1e72993364a80fa8bd';   

const getWeather = async (city) => {
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then((resp) => resp.json())
    .then((json) => {
        return json;
    })
}

export default getWeather; 