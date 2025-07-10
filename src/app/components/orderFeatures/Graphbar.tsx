import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const salesData = [
  { name: 'Jan', value: 10000, label: '$35.19' },
  { name: 'Feb', value: 8000, label: '$30.04' },
  { name: 'Mar', value: 12000, label: '$40.12' },
  { name: 'Apr', value: 16000, label: '$52.32' },
  { name: 'May', value: 11000, label: '$38.19' },
  { name: 'Jun', value: 9000, label: '$20.82' },
  { name: 'Jul', value: 6000, label: '$16.93' }
];
 

   

export default function Graph() {
  return (
    <main>
        <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={salesData}>
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#888' }} />
                      <Tooltip cursor={{ fill: 'transparent' }} />
                      <Bar dataKey="value" radius={[10, 10, 0, 0]} fill="#a78bfa">
                        {salesData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill="#a78bfa" />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
        
                  {/* Value Labels */}
                  <div className="flex justify-between text-xs text-gray-500 pt-4">
                    {salesData.map((entry, index) => (
                      <div key={index} className="text-center w-8">
                        <p className="font-semibold text-[10px]">{entry.label}</p>
                      </div>
                    ))}
                  </div>
    </main>
   
  );
}
