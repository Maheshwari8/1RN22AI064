import React, { useState } from "react";

function App() {
  // State to store input ticker symbol
  const [symbol, setSymbol] = useState("");

  // State to store fetched stock data
  const [stockData, setStockData] = useState(null);

  // Loading indicator
  const [loading, setLoading] = useState(false);

  // Error message
  const [error, setError] = useState(null);

  // ... rest of your component
}
const fetchStockData = () => {
  // Clear previous error and data, show loading
  setLoading(true);
  setError(null);
  setStockData(null);

  fetch(
    `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=Z6VQAOK16RZWPMOA`
  )
    .then((res) => res.json())
    .then((data) => {
      if (data["Global Quote"] && data["Global Quote"]["05. price"]) {
        // Update stockData with API response
        setStockData(data["Global Quote"]);
      } else {
        setError("No data found for that symbol");
      }
      setLoading(false);
    })
    .catch((err) => {
      setError("Error fetching data");
      setLoading(false);
    });
};
