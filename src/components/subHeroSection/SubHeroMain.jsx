import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SubHeroMain = () => {
  const skills = [
    "Project Leadership & Team Collaboration",
    "Safety Standards Compliance",
    "Strong Analytical Skills",
    "Quick Learner",
    "Effective Teamwork",
    "Attention to Detail",
    "High Adaptability"
  ];

  return (
    <div className="w-full border-y bg-transparent border-lightGrey text-lightGrey py-12 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-full bg-cyan/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-4 relative z-10">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.1 * index)} // Staggered delay based on index
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              className="text-center group cursor-default"
            >
              <div className="px-6 py-3 rounded-full bg-darkBrown border border-cyan/20 shadow-lg shadow-black/40 backdrop-blur-sm 
                              transition-all duration-300 ease-out transform
                              group-hover:-translate-y-1 group-hover:border-cyan/60 group-hover:shadow-cyan/20 group-hover:bg-[#352d2a]">
                <p className="font-special text-xs sm:text-sm md:text-base lg:text-lg font-bold uppercase tracking-widest text-[#d8c8c2] group-hover:text-cyan transition-colors duration-300">
                  {skill}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SubHeroMain;
