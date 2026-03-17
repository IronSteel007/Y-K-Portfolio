import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaExternalLinkAlt } from "react-icons/fa";

const SingleProject = ({ name, year, align, image, link, onImageClick }) => {
  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${align === "left" ? "md:flex-row" : "md:flex-row-reverse"
        } justify-end sm:flex-col`}
    >
      <div>
        <h2 className="md:text-3xl sm:text-2xl text-orange ">{name}</h2>
        <h2
          className={`text-xl font-thin text-white font-special sm:text-center ${align === "left" ? "md:text-right" : "md:text-left"
            }`}
        >
          {year}
        </h2>
        <a
          href={link}
          className={`text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-self-center ${align === "left" ? "md:justify-self-end" : "md:justify-self-start"
            }`}
        >
          View <BsFillArrowUpRightCircleFill />
        </a>
      </div>
      <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden shadow-lg shadow-cyan/20 border-2 border-cyan/50 relative group cursor-pointer" onClick={onImageClick}>
        <div className="w-full h-full bg-cyan/40 absolute top-0 left-0 transition-opacity duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100 z-10 backdrop-blur-[2px]">
          <span className="text-white text-xl font-bold font-special drop-shadow-md">View Full Image</span>
        </div>
        <img src={image} alt="website image" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      </div>
    </motion.div>
  );
};

export default SingleProject;
