import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleExperience = ({ experience }) => {
  return (
    <motion.div
      variants={fadeIn("right", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="border-2 border-dashed border-orange p-6 flex flex-col justify-between min-h-[350px] md:w-[250px] sm:w-full">
    <h3 className="text-xl font-bold text-cyan">{experience.job}</h3>
    <p className="text-sm text-orange">{experience.company}</p>
    <p className="text-sm text-lightGrey">{experience.date}</p>
    <ul className="mt-2 list-disc list-inside text-lightGrey text-sm">
      {experience.responsibilities.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
      </ul>
    </motion.div>
  );
};

export default SingleExperience;
