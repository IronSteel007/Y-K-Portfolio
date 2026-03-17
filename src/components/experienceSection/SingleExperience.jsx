import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleExperience = ({ experience, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.1 * index)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="w-full flex"
    >
      <div className="w-full border border-cyan/30 bg-darkBrown/50 p-6 rounded-2xl flex flex-col justify-between items-start 
                      transition-all duration-300 ease-out transform hover:-translate-y-2 hover:border-cyan hover:shadow-cyanMediumShadow hover:bg-darkBrown group">
        <div>
          <h3 className="text-2xl font-bold text-cyan group-hover:text-white transition-colors duration-300 mb-1">{experience.job}</h3>
          <p className="text-lg text-orange font-semibold mb-2">{experience.company}</p>
        </div>
        <ul className="mt-4 list-disc list-inside text-lightGrey text-sm sm:text-base space-y-2 mb-4">
          {experience.responsibilities.map((item, idx) => (
            <li key={idx} className="leading-relaxed group-hover:text-white transition-colors duration-300">{item}</li>
          ))}
        </ul>
        <div className="mt-auto inline-block border border-orange rounded-full px-4 py-1.5 backdrop-blur-sm self-start group-hover:bg-orange transition-colors duration-300">
          <p className="text-sm font-bold text-white tracking-widest uppercase">{experience.date}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleExperience;
