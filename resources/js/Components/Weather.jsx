import React, { useState, useEffect } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Loader from './Loader';

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiKey = '2PXAkT5XefUX4lhqjH0xcezqndpUvIaX'; // Replace with your API key
        const apiUrl = `https://api.tomorrow.io/v4/weather/realtime?location=manila&apikey=2PXAkT5XefUX4lhqjH0xcezqndpUvIaX`;

        fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
            throw new Error('Failed to fetch weather data');
            }
            return response.json();
        })
        .then(data => {
            setWeatherData(data);
            setLoading(false);
        })
        .catch(error => {
            setError(error.message);
            setLoading(false);
        });
    }, []);

    if (loading) return <div className="text-center mt-8"><Loader /> </div>;
    if (error) return <div className="text-center mt-8 text-red-500">Error: {error}</div>;

    return (
        <>
            {weatherData && (
                <div className="max-w-md mx-auto p-6 rounded-lg shadow-md mt-2">
                <h2 className="text-xl font-bold mb-4">Weather in Manila, Philippines</h2>
                <p className="text-lg mb-2">Temperature: {weatherData.data.values.temperature}°C</p>
                <p className="text-lg mb-2">Humidity: {weatherData.data.values.humidity}%</p>
                <p className="text-lg">Wind Speed: {weatherData.data.values.windSpeed} m/s</p>
                </div>
            )}
        </>
    );
};

export default Weather;
