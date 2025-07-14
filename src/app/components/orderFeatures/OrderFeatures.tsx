

'use client';
import Graph from './Graphbar';

export default function Orderfeatures() {
  return (
    <section className="bg-white px-4 py-10 md:px-12 md:py-16">
      {/* Header Text */}
      <p className="text-sm text-gray-700 font-bold mb-2 md:ml-20">
        ● Order Features
      </p>

      {/* Title & Paragraph */}
      <div className="max-w-5xl mx-auto mb-20 md:flex justify-between items-start gap-10">
        <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-6 md:mb-0 md:w-1/2">
          GetCRM Helps You <br /> Build Beautiful Website
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed md:w-1/2">
          Providing customer service in one platform. <br />
          Our responsive landing page works on all devices, <br />
          with a fully redesigned project management experience.
        </p>
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-10">
        {/* Feature List */}
        <div className="flex-1 space-y-6">
          <div className="flex items-start gap-4">
            <div className="text-yellow-400 text-xl mt-1">★</div>
            <div>
              <h4 className="font-semibold text-lg">Simply Copy & Paste</h4>
              <p className="text-gray-500 text-sm mt-1">
                Many desktop publishing packages and web page editors now use
                for them.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="text-purple-400 text-xl mt-1">🟣</div>
            <div>
              <h4 className="font-semibold text-lg">Easy To Customize</h4>
              <p className="text-gray-500 text-sm mt-1">
                Many desktop publishing packages and web page editors now use
                for them.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="text-cyan-400 text-xl mt-1">💧</div>
            <div>
              <h4 className="font-semibold text-lg">Made With TailwindCSS</h4>
              <p className="text-gray-500 text-sm mt-1">
                Many desktop publishing packages and web page editors now use
                for them.
              </p>
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="flex-1 bg-[#f5f5f5] rounded-3xl p-8">
          <div className="bg-white p-6 rounded-3xl shadow-lg w-full">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-sm font-semibold">Store Order Analysis</h4>
                <p className="text-xs text-gray-400">
                  Your income and expense in last 30 days
                </p>
              </div>
              <div className="text-xs space-x-3 text-gray-500">
                <span className="text-purple-600 font-semibold">⬤ Sales</span>
                <span className="text-purple-300">⬤ Insight</span>
              </div>
            </div>

            {/* Graph Component */}
            <Graph />
          </div>
        </div>
      </div>
    </section>
  );
}
