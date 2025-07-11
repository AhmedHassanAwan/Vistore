

'use client';
import Graph from './Graphbar'; 


export default function Orderfeatures() {
  return (
    <section className=" bg-white px-4 py-10 md:px-12 md:py-16">
      {/* Header Text */}

          <p className="text-sm text-gray-700 font-bold mb-2 md:ml-20 ">● Order Features</p>
        <div className="md:flex justify-between items-start gap-10 max-w-5xl mx-auto mb-20">
  <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-6 md:w-1/2">
    GetCRM Helps You <br /> Build Beautiful Website
  </h2>
  <p className="text-gray-500 text-sm leading-relaxed md:w-1/2 md:ml-35">
    Providing customer service in one platform.<br />
    Our responsive landing page works on all devices,<br />
    with a fully redesigned project management experience.
  </p>
</div>


      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        {/* Feature List */}
        <div className="flex-1 space-y-6">
          <div className="flex items-start gap-4">
            <div className="text-yellow-400 text-xl mt-1">★</div>
            <div>
              <h4 className="font-semibold text-lg">Simply Copy & Paste</h4><br />
              <p className="text-gray-500 text-sm">
                Many desktop publishing packages and web <br /> page editors now use for them.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="text-purple-400 text-xl mt-1">🟣</div>
            <div>
              <h4 className="font-semibold text-lg">Easy To Customize</h4><br />
              <p className="text-gray-500 text-sm">
                Many desktop publishing packages and web <br /> page editors now use for them.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="text-cyan-400 text-xl mt-1">💧</div>
            <div>
              <h4 className="font-semibold text-lg">Made With TailwindCSS</h4><br />
              <p className="text-gray-500 text-sm">
                Many desktop publishing packages and web <br /> page editors now use for them.
              </p>
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className='bg-[#f5f5f5]  rounded-3xl p-8 '>
        <div className="bg-white p-6 rounded-3xl shadow-lg w-full lg:w-[480px]">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h4 className="text-sm font-semibold">Store Order Analysis</h4>
              <p className="text-xs text-gray-400">Your income and expense in last 30days</p>
            </div>
            <div className="text-xs space-x-3 text-gray-500">
              <span className="text-purple-600 font-semibold">⬤ Sales</span>
              <span className="text-purple-200">⬤ Insight</span>
            </div>
          </div>


          {/* grap  */}

          <Graph/>

          {/* grap  */}

        </div>
            </div>
      </div>
    </section>
  );
}
