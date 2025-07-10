// "use client";

// import Image from "next/image";
// import { ArrowUpRight, ArrowDown, ArrowUp, Dot, Star } from "lucide-react";

// export default function CRMFeatures() {
//   return (
//     <section className=" py-30  bg-white mx-15  rounded-4xl shadow-lg px-6 md:px-12 mb-15 ">
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">
    
//     {/* LEFT CARD */}
//     <div className="bg-[#f5f5f5] rounded-3xl p-6 md:p-8 shadow-md">
//       <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md">
//         <div className="flex items-center justify-between mb-4">
//           <h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
//           <div className="bg-purple-500 text-white p-2 rounded-full">
//             <ArrowUpRight size={16} />    
//           </div>
//         </div>

//         <div className="text-sm text-gray-500 flex flex-wrap items-center gap-4 mb-4">
//           <span className="flex items-center gap-1 text-green-500">
//             <ArrowDown size={12} /> Incoming
//           </span>
//           <span className="flex items-center gap-1 text-orange-500">
//             <ArrowUp size={12} /> Outgoing
//           </span>
//         </div>

//         {/* Outgoing Product */}
//         <div className="flex items-center justify-between border-b pb-4 mb-4">
//           <div className="flex items-center gap-4">
//             <Image
//               src="/images/image1.png"
//               alt="Product"
//               width={48}
//               height={48}
//               className="rounded-md object-cover"
//             />
//             <div>
//               <p className="font-medium text-gray-800">Stone Black Jacket</p>
//               <p className="text-xs text-gray-400">Qty: 10 • 5 mins ago</p>
//             </div>
//           </div>
//           <p className="font-semibold text-gray-700">$200.00</p>
//         </div>

//         {/* Incoming Product */}
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-4">
//             <Image
//               src="/images/images2.png"
//               alt="Product"
//               width={48}
//               height={48}
//               className="rounded-md object-cover"
//             />
//             <div>
//               <p className="font-medium text-gray-800">Stone Black Jacket</p>
//               <p className="text-xs text-gray-400">Qty: 15 • 5 mins ago</p>
//             </div>
//           </div>
//           <p className="font-semibold text-gray-700">$140.00</p>
//         </div>
//       </div>
//     </div>

//     <div className="space-y-6 md:ml-6">
//       <p className="text-sm text-gray-500 font-bold">• Key Features</p>
//       <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//         What Can Our CRM <br className="hidden md:block" /> Sales Do For You?
//       </h2>

//       {/* Feature 1 */}
//       <div className="flex items-start gap-4">
//         <div className="bg-yellow-100 text-yellow-600 p-2 rounded-full">
//           <Dot size={20} />
//         </div>
//         <div>
//           <p className="font-semibold text-gray-800">Better Lead Management</p>
//           <p className="text-sm text-gray-500">
//             Track every interaction with potential customers<br />in one centralized place.
//           </p>
//         </div>
//       </div>

//       {/* Feature 2 */}
//       <div className="flex items-start gap-4">
//         <div className="bg-purple-100 text-purple-600 p-2 rounded-full">
//           <Star size={20} />
//         </div>
//         <div>
//           <p className="font-semibold text-gray-800">Smart Data Analytics</p>
//           <p className="text-sm text-gray-500">
//             Get real-time reports and insights to make<br />better decisions.
//           </p>
//         </div>
//       </div>

//       <button className="mt-4 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition cursor-pointer">
//         Learn More →
//       </button>
//     </div>
//   </div>
// </section>

//   );
// }



'use client';

import Image from "next/image";
import { ArrowUpRight, ArrowDown, ArrowUp, Dot, Star } from "lucide-react";

export default function CRMFeatures() {
  return (
    <section className="py-16 px-4 md:px-12 bg-white rounded-3xl shadow-lg mb-16 md:mx-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-x-10 max-w-6xl mx-auto items-start">
        
        {/* LEFT CARD */}
        <div className="bg-[#f5f5f5] rounded-3xl p-4 md:p-8 shadow-md">
          <div className="bg-white rounded-2xl p-4 md:p-8 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base md:text-lg font-semibold text-gray-800">Recent Activity</h3>
              <div className="bg-purple-500 text-white p-2 rounded-full">
                <ArrowUpRight size={16} />
              </div>
            </div>

            <div className="text-sm text-gray-500 flex flex-wrap items-center gap-4 mb-4">
              <span className="flex items-center gap-1 text-green-500">
                <ArrowDown size={12} /> Incoming
              </span>
              <span className="flex items-center gap-1 text-orange-500">
                <ArrowUp size={12} /> Outgoing
              </span>
            </div>

            {/* Outgoing Product */}
            <div className="flex items-center justify-between border-b pb-4 mb-4">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/image1.png"
                  alt="Product"
                  width={48}
                  height={48}
                  className="rounded-md object-cover"
                />
                <div>
                  <p className="font-medium text-gray-800">Stone Black Jacket</p>
                  <p className="text-xs text-gray-400">Qty: 10 • 5 mins ago</p>
                </div>
              </div>
              <p className="font-semibold text-gray-700">$200.00</p>
            </div>

            {/* Incoming Product */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/images2.png"
                  alt="Product"
                  width={48}
                  height={48}
                  className="rounded-md object-cover"
                />
                <div>
                  <p className="font-medium text-gray-800">Stone Black Jacket</p>
                  <p className="text-xs text-gray-400">Qty: 15 • 5 mins ago</p>
                </div>
              </div>
              <p className="font-semibold text-gray-700">$140.00</p>
            </div>
          </div>
        </div>

        {/* RIGHT FEATURES */}
        <div className="space-y-6 md:ml-4">
          <p className="text-sm text-gray-500 font-bold">• Key Features</p>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            What Can Our CRM <br className="hidden md:block" /> Sales Do For You?
          </h2>

          {/* Feature 1 */}
          <div className="flex items-start gap-4">
            <div className="bg-yellow-100 text-yellow-600 p-2 rounded-full">
              <Dot size={20} />
            </div>
            <div>
              <p className="font-semibold text-gray-800">Better Lead Management</p>
              <p className="text-sm text-gray-500">
                Track every interaction with potential customers in one centralized place.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-4">
            <div className="bg-purple-100 text-purple-600 p-2 rounded-full">
              <Star size={20} />
            </div>
            <div>
              <p className="font-semibold text-gray-800">Smart Data Analytics</p>
              <p className="text-sm text-gray-500">
                Get real-time reports and insights to make better decisions.
              </p>
            </div>
          </div>

          <button className="mt-4 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition cursor-pointer">
            Learn More →
          </button>
        </div>
      </div>
    </section>
  );
}
