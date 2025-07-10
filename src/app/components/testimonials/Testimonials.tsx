


import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="bg-[#fafafa] px-4 py-16 mb-8">

      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm text-gray-500 mb-1">• Our Testimonial</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          What Our Customers Say
        </h2>
        <p className="text-sm text-gray-500">
          See how companies like yours have smashed their sales success goals
        </p>
        <button className="mt-6 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition cursor-pointer">
          See All Testimonial
        </button>
      </div>




    <div className="flex justify-center gap-5  md:gap-50 items-center flex-wrap ml-10 border-b border-gray-200 ">
      <div>
            <h3 className="text-4xl font-bold text-gray-900 mb-1">$2.5M</h3>
         <p className="text-sm text-gray-500">Generate Sales</p>
          </div>

          {/* Card 1 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <p className="text-gray-700 text-sm mb-4 leading-relaxed">
              Using GetCRM CRM is one of the best decisions we've ever made. We've <br/> seen our annual revenue explode, and <br/> the outlook just keeps getting sunnier.
            </p>
            <div className="flex items-center gap-4">
              <Image
                src="/images/founder ceo.JPG"
                alt="Rick Barker"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-800">Rick Barker</p>
                <p className="text-xs text-gray-500">Founder & CEO, Foster Business Strategies</p>
              </div>
            </div>
          </div>
    </div>


    <div className="flex justify-center gap-5  md:gap-50 items-center flex-wrap ml-10 mt-10 ">
      <div>
            <h3 className="text-4xl font-bold text-gray-900 mb-1">45%</h3>
         <p className="text-sm text-gray-500">Crew Revence</p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <p className="text-gray-700 text-sm mb-4 leading-relaxed">
               GetCRM CRM is Create For This People. Its The Kind Of Software That Just Work <br/>  I dont Have  To Try To make  it<br/> Work. It Already Does. Its Just Pefect.
            </p>
            <div className="flex items-center gap-4">
              <Image
                 src="/images/digitalmarketing.JPG"
                alt="Rick Barker"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-800">Henry Jacks</p>
                <p className="text-xs text-gray-500">Digital Markiting Dirctor</p>
              </div>
            </div>
          </div>
    </div>
  
      {/* </div> */}
    </section>
  );
}
