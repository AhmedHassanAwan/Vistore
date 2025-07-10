import { FaFacebookF, FaInstagram, FaTimes, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-[#f8d1d8] to-pink px-6 md:px-20 py-12 text-gray-800 text-sm md:mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="space-y-4">
          <h2 className="text-xl md:text-3xl font-bold">Are You Interested <br /> With Vistore?</h2>
<button className="bg-black text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300 mt-10 cursor-pointer">
  Get Started
</button>


        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-15 w-full md:w-auto md:mr-7">
          <div>
            <h1 className="font-bold mb-5">Company</h1>
            <ul className="space-y-4">
              <li>Security</li>
              <li>Brand Guidelines</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-5">Career</h4>
            <ul className="space-y-3 md:space-y-4">
              <li>Jobs</li>
              <li>New</li>
              <li>Hiring</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-5">Legal Information</h4>
            <ul className="space-y-4">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookies Policy</li>
            </ul>
          </div>
        </div>
      </div>

      <div className=" mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
             <Image className='bg-[#fce6e4] rounded-full'
                src="/images/logo.png"  
                  alt="Vistore Logo"  
                  width={40}
                  height={40}
                />
          <span className="font-semibold text-sm">Vistore.</span>
        </div>

        <div className="flex flex-wrap gap-4 items-center  text-sm md:justify-center text-black  md:gap-10">
          <button className="border px-4 py-1 rounded-full">Home</button>
          <span>About Us</span>
          <span>About Us</span>
          <span>Reviews</span>
        </div>

        <div className="flex items-center gap-3 text-gray-600 text-lg">
          <FaFacebookF className="bg-transparent border-gray-800 p-2 rounded-full w-8 h-8" />
          <FaInstagram className="bg-transparent border-gray-500 p-2 rounded-full w-8 h-8" />
          <FaTimes className="bg-transparent border-gray-500 p-2 rounded-full w-8 h-8" />
          <FaLinkedinIn className="bg-transparent border-gray-500 p-2 rounded-full w-8 h-8" />
        </div>
      </div>

      <div className="text-sm text-gray-500 flex justify-center gap-6 mt-6">
        <span>Terms & Conditions</span>
        <span>Privacy Policy</span>
      </div>
    </footer>
  );
}
