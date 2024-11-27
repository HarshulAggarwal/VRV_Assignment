import React from "react";
import { Line } from "react-chartjs-2";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip as ChartTooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  ChartTooltip,
  Legend
);

const DashboardCharts = () => {
  const revenueData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Revenue",
        data: [12, 19, 10, 20, 12, 15],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  const countryWiseData = [
    { name: "India", value: 23, change: "+32%", color: "#00C49F" },
    { name: "USA", value: 32, change: "+12%", color: "#0088FE" },
    { name: "Sri Lanka", value: 12, change: "-12%", color: "#FFBB28" },
    { name: "Australia", value: 32, change: "+3%", color: "#FF8042" },
  ];
  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Revenue Growth",
      },
    },
  };


  const totalValue = countryWiseData.reduce((sum, item) => sum + item.value, 0);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { name, value } = payload[0].payload;
      const percentage = ((value / totalValue) * 100).toFixed(2);
      return (
        <div className="bg-white p-2 border rounded shadow">
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-sm">Value: {value}</p>
          <p className="text-sm">Percentage: {percentage}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex space-x-4">
      <div className="p-4 bg-white shadow rounded-lg w-3/4">
        <h3 className="text-lg font-semibold mb-2">Revenue Growth</h3>
        <Line data={revenueData} options={lineChartOptions} />
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 w-1/4">
        <h2 className="text-lg font-semibold mb-4">Country Wise Clients</h2>
        <div className="flex justify-center">
          <ResponsiveContainer width={200} height={200}>
            <PieChart>
              <Pie
                data={countryWiseData}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={5}
                label
              >
                {countryWiseData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-6">
          {countryWiseData.map((item, index) => (
            <div key={item.name}>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="ml-2 text-sm">{item.name}</span>
                </div>
                <div className="text-sm">{item.value}</div>
                <div
                  className={`text-sm ${item.change.startsWith("+") ? "text-green-500" : "text-red-500"
                    }`}
                >
                  {item.change}
                </div>
              </div>
              {index !== countryWiseData.length - 1 && <hr className="my-2 border-gray-300" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardCharts;