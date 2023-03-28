import axios from 'axios';
import React, { useEffect, useState } from 'react';
import apiKey from '../Components/apiKey';
import Loader from '../Components/loader';

const Quotes = () => {
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const dataJson = await axios('https://api.api-ninjas.com/v1/quotes?category=knowledge', {
          headers: {
            'x-api-key': apiKey,
          },
        });
        const response = await dataJson.data;

        setData(response[0]);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
    return () => {
      setIsLoading(false);
    };
  }, [setData, setIsLoading]);

  if (hasError) return <p className="error">Something went wrong!</p>;
  if (isLoading) return <Loader />;

  return (
    <div className="quote-display">
      <p>
        <strong>{data.quote}</strong>
      </p>
      <span>
        by
        {data.author}
      </span>
    </div>
  );
};

export default Quotes;
