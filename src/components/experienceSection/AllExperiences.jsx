import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Automation & Robotics Engineer",
    company: "Afric Light",
    date: "2023 - Present",
    responsibilities: [
      "Managing automation projects from design to deployment.",
      "Programming and integrating industrial robots and PLC systems.",
      "Performing preventive and corrective maintenance on automated lines.",
      "Preparing detailed technical reports and performance documentation.",
      "Coordinating with cross-functional teams to ensure timely project delivery.",
    ],
  },
  {
    job: "Automation Technician",
    company: "Alphatec",
    date: "2022 - 2023",
    responsibilities: [
      "Installing and maintaining automated and electromechanical systems.",
      "Diagnosing and resolving mechanical, electrical, and software issues.",
      "Assisting in project planning and workflow optimization.",
      "Documenting maintenance activities and preparing status reports.",
    ],
  },
  {
    job: "Robotics & Automation Intern",
    company: "Group PSA",
    date: "2021 - 2022",
    responsibilities: [
      "Supporting programming and testing of robotic arms for production lines.",
      "Collecting and analyzing machine performance data.",
      "Contributing to maintenance schedules and operational reports.",
    ],
  },
  {
    job: "Web Developer & Instructor",
    company: "Freelance",
    date: "2021 - Present",
    responsibilities: [
      "Developing modern web applications with React and JavaScript.",
      "Teaching web development and mentoring students on best practices.",
      "Managing client projects, timelines, and deliverables.",
      "Creating documentation and user guides for delivered solutions.",
    ],
  },
  {
    job: "Automation & Robotics Engineer",
    company: "Afric Light",
    date: "2023 - Present",
    responsibilities: [
      "Managing automation projects from design to deployment.",
      "Programming and integrating industrial robots and PLC systems.",
      "Performing preventive and corrective maintenance on automated lines.",
      "Preparing detailed technical reports and performance documentation.",
      "Coordinating with cross-functional teams to ensure timely project delivery.",
    ],
  },
  {
    job: "Automation & Robotics Engineer",
    company: "Afric Light",
    date: "2023 - Present",
    responsibilities: [
      "Managing automation projects from design to deployment.",
      "Programming and integrating industrial robots and PLC systems.",
      "Performing preventive and corrective maintenance on automated lines.",
      "Preparing detailed technical reports and performance documentation.",
      "Coordinating with cross-functional teams to ensure timely project delivery.",
    ],
  },
];


const AllExperiences = () => {
  return (
    <div className="flex flex-wrap md:flex-row sm:flex-col items-start justify-between gap-6">
  {experiences.map((experience, index) => (
    <>
      <SingleExperience key={index} experience={experience} />
      {index < experiences.length - 1 ? (
        <motion.div
          variants={fadeIn("right", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
        </motion.div>
      ) : null}
    </>
  ))}
</div>

  );
};

export default AllExperiences;
