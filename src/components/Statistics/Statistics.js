
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "React",
    uv: 5,
    pv: 10,
    amt: 5
  },
  {
    name: "JavaScript",
    uv: 3000,
    pv: 1398,
    amt: 10
  },
  {
    name: "CSS",
    uv: 2000,
    pv: 9800,
    amt: 15
  },
  {
    name: "GIT",
    uv: 2780,
    pv: 3908,
    amt: 20
  }

];

export default function App() {
  return (
   <div className="chart">
     <BarChart
      width={500}
      height={400}
      data={data}
    
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
      barSize={20}
    >
      <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
      <YAxis dataKey="pv"/>
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar dataKey="pv" fill="#8884d8" background={{ fill: "#eee" }} />
    </BarChart>
   </div>
  );
}