import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const BreweryBarChart = () => {
  const initialData = [
    { name: "micro", count: 0 },
    { name: "nano", count: 0 },
    { name: "regional", count: 0 },
    { name: "brewpub", count: 0 },
    { name: "large", count: 0 },
    { name: "planning", count: 0 },
    { name: "contract", count: 0 },
    { name: "proprietor", count: 0 },
    { name: "closed", count: 0 },
  ];

  const [breweryData, setBreweryData] = useState(initialData);
  const [barColor, setBarColor] = useState("#FFD700"); // Default color

  useEffect(() => {
    const fetchData = async () => {
      const dataPromises = initialData.map(async (category) => {
        const response = await fetch(
          `https://api.openbrewerydb.org/breweries/meta?by_type=${category.name}`
        );
        const data = await response.json();
        return {
          name: category.name,
          count: parseInt(data.total, 10),
        };
      });

      Promise.all(dataPromises).then((dataForChart) => {
        setBreweryData(dataForChart);
      });
    };

    fetchData();
  }, []);

  const handleColorChange = (e) => {
    setBarColor(e.target.value);
  };

  return (
    <div className="chart-container">
      <label>
        Select Bar Color:
        <input type="color" value={barColor} onChange={handleColorChange} />
      </label>
      <BarChart
        width={800}
        height={300}
        data={breweryData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" interval={0} />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill={barColor} name="Total Types of Breweries" />
      </BarChart>
    </div>
  );
};

export default BreweryBarChart;
