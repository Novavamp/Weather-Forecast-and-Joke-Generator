import express, { response } from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "http://api.openweathermap.org/geo/1.0/direct?";
const API_URL2 = "https://api.openweathermap.org/data/3.0/onecall?";
const API_KEY = "675d73d6a12a6bc959f9af6df91ec980";


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

function capitalizeWords(description) {
    return description
        .split(' ') // Split the string into an array of words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
        .join(' '); // Join the words back into a single string
}

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/current-weather", async (req, res) => {
    const city = req.body.city;
    const countryCode = req.body.countrycode;
    try {
        const response = await axios.get(API_URL + `q=${city},${countryCode}&limit=1&appid=${API_KEY}`);

        const latitude = response.data[0].lat;
        const longitude = response.data[0].lon;

        const result = await axios.get(API_URL2 + `lat=${latitude}&units=metric&exclude=hourly,daily&lon=${longitude}&appid=${API_KEY}`);
        const icon = result.data.current.weather[0].icon;

        const description = result.data.current.weather[0].description;
        const capitalizedDescription = capitalizeWords(description);

        res.render("index.ejs", {
            city: response.data[0].name,
            state: response.data[0].state,
            temp: result.data.current.temp + " °C",
            feelsLike: result.data.current.feels_like + " °C",
            humidity: result.data.current.humidity + " %",
            windSpeed: result.data.current.wind_speed + " m/s",
            description: capitalizedDescription,
            icon: `https://openweathermap.org/img/wn/${icon}@2x.png`,
            country: req.body.countryName
        });
    } catch (error) {
        if (error.response) {
            // Request was made and the server responded with an error status code
            console.error("Error Response Data:", error.response.message);
            console.error("Error Headers:", error.response.headers);
            res.render("index.ejs", { error: error.response.message });
        } else if (error.request) {
            // Request was made but no response was received
            console.error("Error Request Data:", error.request);
            res.render("index.ejs", { error: error.response.message });
        } else {
            // Something else happened
            console.error("General Error Message:", error.message);
            res.render("index.ejs", { error: "Check the typo or city name, and make sure it is correct." });
        }
    }
});

app.get("/joke", (req, res) => {
    res.render("jokes.ejs");
})

app.post("/joke", async (req, res) => {
    const API_URL = "https://v2.jokeapi.dev/joke/";

    let category = req.body.category;
    if (Array.isArray(category)) {
        category = category.filter(value => value !== 'on');
    } else if (category === 'on') {
        // If it's a single "on" value, ignore it
        category = [];
    }
    const type = req.body.type;
    const search = req.body.search;
    try {
        const result = await axios.get(API_URL + category + `?type=${type}&contains=${search}`);
        res.render("jokes.ejs", { result: result.data, type: capitalizeWords(result.data.type) });

    } catch (error) {
        console.error('Error fetching jokes:'); // Log the error details for debugging
        res.render("jokes.ejs", { error: "Check your selections and try again." });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});