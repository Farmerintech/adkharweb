import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";
import hero from "../assets/masjid1.png";
import hero1 from "../assets/masjid2.png";
import hero2 from "../assets/masjid3.png";
import hero3 from "../assets/masjid4.png";
import hero4 from "../assets/masjid5.png";
import { FetchData } from "../services/api";
const images = [hero, hero1, hero2, hero3, hero4];

export const Hero = () => {
  const [current, setCurrent] = useState(0);
FetchData()
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center bg-white lg:px-20 py-12  md:pt-32 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-6">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          <span className="uppercase tracking-[0.3em] text-[#4A154B] font-semibold">
            Adkhar
          </span>

          <h1
            className="mt-6 text-3xl md:text-5xl lg:text-6xl leading-relaxed text-[#4A154B] font-bold"
            dir="rtl"
            style={{ fontFamily: "'Amiri', serif" }}
          >
            يَا أَيُّهَا الَّذِينَ آمَنُوا اذْكُرُوا اللَّهَ ذِكْرًا كَثِيرًا
            وَسَبِّحُوهُ بُكْرَةً وَأَصِيلًا
          </h1>

          <p className="mt-8 text-lg md:text-xl text-[#4A154B]/80 min-h-[80px]">
            <Typewriter
              words={[
                "O you who have believed, remember Allah with much remembrance, and glorify Him morning and evening."
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={40}
              deleteSpeed={20}
            />
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-8 py-4 rounded-full bg-[#4A154B] text-white font-semibold hover:opacity-90 transition">
              Start Reading
            </button>

            <button className="px-8 py-4 rounded-full border-2 border-[#4A154B] text-[#4A154B] hover:bg-[#4A154B] hover:text-white transition">
              Explore Categories
            </button>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-full lg:max-w-lg h-[450px] lg:rounded-[40px] overflow-hidden lg:border-2 lg:border-[#4A154B]/20 shadow-lg shadow-[#4A154B]/10">
            <AnimatePresence mode="popLayout">
              <motion.img
                key={images[current]}
                src={images[current]}
                alt="Mosque"
                className="md:absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              />
            </AnimatePresence>

            {/* Optional subtle overlay */}
            <div className="absolute inset-0 bg-[#4A154B]/5" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};