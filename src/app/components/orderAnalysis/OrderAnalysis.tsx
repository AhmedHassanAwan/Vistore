



'use client';
import Image from 'next/image';
import Graph from './Graph'; // Assuming Graph is in the same directory


export default function orderAnalysis() {
  return (
   <section className="bg-[#fafafa] p-4 md:p-12 mb-50">

     
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:mx-15">
        <div>
          <p className="text-sm text-gray-600 font-medium">● Order Analysis</p>
          <h1 className="text-3xl md:text-5xl font-bold mt-2 leading-tight max-w-xl">
            Selling Digital <br /> Products Is Easier.
          </h1>
        </div>

        <div className="text-gray-500 text-sm max-w-xs md:mr-15">
          <p>
            Digital Products Are The Future! Easy To Start, Highly Profitable For Smart Entrepreneurs.
          </p>
         <button className="bg-black text-white flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium shadow-md hover:bg-gray-900 transition cursor-pointer mt-4 ">
  Learn More
  <span className="text-lg">→</span>
</button>

        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-6 rounded-2xl shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg">Lancer Evo 10</h3>
            <span className="text-gray-400 text-sm">✕</span>
          </div>
          <p className="text-sm text-gray-500 mb-2">Yes Targeted = 87%</p>

          <div className="flex gap-1 h-3 w-full overflow-hidden rounded-full mb-4">
            <div className="bg-orange-400 w-[50%]" />
            <div className="bg-purple-400 w-[20%]" />
            <div className="bg-blue-400 w-[17%]" />
            <div className="bg-black w-[13%]" />
          </div>

          <p className="text-xl font-bold">$24,120 <span className="text-gray-400 text-sm">/ $32,200</span></p>
        </div>

        {/* Chart Card */}
        <div className="bg-gray-50 p-6 rounded-2xl shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg">Store Order Analysis ⓘ</h3>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm mb-6">
            {/* Stats Column */}
            <div className="flex-1 space-y-3">
              <div>
                <p className="text-gray-500">Online Store</p>
                <p className="font-bold text-lg">6,828,782 <span className="text-green-500 ml-1 text-sm">+123</span></p>
                <p className="text-xs text-gray-400">Higher than last month</p>
              </div>
              <div>
                <p className="text-gray-500">Offline Store</p>
                <p className="font-bold text-lg">3,363,430 <span className="text-green-500 ml-1 text-sm">+313</span></p>
                <p className="text-xs text-gray-400">Higher than last month</p>
              </div>
            </div>

            {/* Graph Column */}
            <div className="flex-1">
              <Graph/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
