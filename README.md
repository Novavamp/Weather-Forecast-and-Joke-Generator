# Weather Forecast and Joke Generator Web Apps

## Overview

This project consists of two web applications:

1. **Weather Forecasting Web App** – Displays current weather conditions for any city worldwide.
2. **Joke Generator Web App** – Generates fun jokes based on user preferences.

Both apps demonstrate API integration, form handling, and responsive web design using a combination of frontend and backend technologies.

## Features

### Weather Forecast Web App

- Uses the [OpenWeather API](https://openweathermap.org/) to fetch real-time weather data.
- Allows users to search for a city and optionally select a country from a dropdown.
- Displays weather conditions such as:
  - Temperature
  - Wind speed
  - Humidity
  - Weather condition (e.g., sunny, raining, cloudy) with dynamic images based on the condition.
- Simple and intuitive UI for user interaction.

### Joke Generator Web App

- Uses a public joke API to fetch jokes based on user input.
- Users can select:
  - Joke category (e.g., programming, general)
  - Type of joke (single or two-part jokes)
  - Optionally search for jokes using keywords.
- Option to get random jokes without selecting any criteria.

## Technologies Used

**Backend:**

- Node.js
- Express.js
- EJS (Embedded JavaScript for templating)

**Frontend:**

- HTML
- CSS
- JavaScript

## Installation

To run these apps locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Novavamp/Weather-Forecast-and-Joke-Generator.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Weather-Forecast-and-Joke-Generator
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up your API keys:

   - Obtain an API key from [OpenWeather](https://home.openweathermap.org/users/sign_up) for the Weather Forecast app.
   - Create and add your API key to the index.js.

5. Run the app:

   ```bash
   node index.js
   ```

6. Access the app at:
   - Weather Forecast App: `http://localhost:3000/weather`
   - Joke Generator App: `http://localhost:3000/jokes`

## Usage

### Weather Forecast Web App

- Enter a city name.
- Optionally select a country from the dropdown.
- Click "Get Weather" to display the weather overview.

### Joke Generator Web App

- Select a joke category and type (optional).
- Enter a keyword to search for a specific joke (optional).
- Click "Generate Joke" to fetch a random or specific joke.

## Contributions

Feel free to fork the repository, make improvements, and submit pull requests. All contributions are welcome!
