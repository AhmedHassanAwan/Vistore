

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center gap-12 py-16 px-4 max-w-7xl mx-auto">
      
      <div className="text-center max-w-3xl">
        <p className="text-sm text-gray-600 font-medium mb-2">
          ● Top CRM Platform 🚀
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Smarter CRM Stronger <br />  Sustainable Sales
        </h1>
        <p className="mt-6 text-gray-700 text-lg">
          Our CRM helps you nurture relationships, automate sales processes, and
          make data-driven decisions—so you can focus on closing more deals.
        </p>
        <div className="mt-8">
          <button className="px-6 py-3 bg-black text-white rounded-full text-lg font-semibold hover:bg-gray-800 transition cursor-pointer">
            Get Started →
          </button>
        </div>
      </div>




<div className="w-full max-w-5xl mx-auto border-2 border-white rounded-4xl overflow-hidden shadow-lg px-3.5 py-3.5">
  <Image
    src="/images/hero.png"
    alt="Dashboard preview"
    width={1000}
    height={600}
    className=" md:rounded-t-4xl object-cover shadow-md sm:rounded-t-2xl "
    priority/>
</div>

    </section>
  );
}    
