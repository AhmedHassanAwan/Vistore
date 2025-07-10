// components/Graph.tsx
"use client";
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip, Cell } from "recharts";

const data = [
  { name: "Jan", value: 400, color: "#ef4444" },
  { name: "Feb", value: 600, color: "#3b82f6" },
  { name: "Mar", value: 500, color: "#f97316" },
  { name: "Apr", value: 700, color: "#ec4899" },
];

export default function Graph() {
  return (
    <ResponsiveContainer width="100%" height={160}>
      <BarChart data={data}>
        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#888" }} />
        <Tooltip cursor={{ fill: "transparent" }} />
        <Bar dataKey="value" radius={[8, 8, 0, 0]}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
