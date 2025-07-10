


"use client";
import { motion } from "framer-motion";
import Image from "next/image";


const featuresData = [
  { id: 1, name: "Boltshift", image: "/images/Boltshift.png" },
  { id: 2, name: "Lightbox", image: "/images/light.png" },
  { id: 3, name: "Spherule", image: "/images/spherule02.png" },
  { id: 4, name: "Global Bank", image: "/images/global bank.png" },
  { id: 5, name: "Nietzsche", image: "/images/Nietzsche1.png" },
];


const TrustedBy = ({ name, image }: { name: string; image: string }) => (
  <div className="flex items-center justify-center">
    <Image
      src={image}
      alt={name}
      width={200}
      height={40}
      className="object-contain"
    />
  </div>
);


export default function Brands() {
  return (
    <section className="bg-white py-10 overflow-hidden">
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-14 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...featuresData, ...featuresData].map((item, index) => (
            <TrustedBy key={`${item.id}-${index}`} name={item.name} image={item.image} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}



