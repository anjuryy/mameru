import React, { useState, useEffect } from 'react';
import { IoBookOutline } from "react-icons/io5";
import Loader from './Loader';

const Quotes = () => {
  const [quoteData, setQuoteData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = '2PXAkT5XefUX4lhqjH0xcezqndpUvIaX'; // Replace with your API key
    const apiUrl = `https://api.quotable.io/quotes/random`;

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        return response.json();
      })
      .then(data => {

        setQuoteData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center mt-8"><Loader /></div>;
  if (error) return <div className="text-center mt-8 text-red-500">Error: {error}</div>;

  return (
    <div className='mt-4'>
        <div className="max-w-md mx-auto p-6 rounded-lg shadow-lg">
            <blockquote className="text-lg italic">
                "{quoteData[0].content}"
            </blockquote>

            <div className="mt-4 flex items-center justify-between text-sm ">
                <div className="italic">
                    { quoteData[0].tags[0] }
                </div>
                <div className="flex items-center justify-end text-sm">
                        <IoBookOutline /> &nbsp; {quoteData[0].author}
                </div>

            </div>
        </div>
      {/* {weatherData && (
        <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Weather in Manila, Philippines</h2>
          <p className="text-lg mb-2">Temperature: {weatherData.data.values.temperature}°C</p>
          <p className="text-lg mb-2">Humidity: {weatherData.data.values.humidity}%</p>
          <p className="text-lg">Wind Speed: {weatherData.data.values.windSpeed} m/s</p>
        </div>
      )} */}
    </div>
  );
};

export default Quotes;
