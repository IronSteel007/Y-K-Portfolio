import SingleExperience from "./SingleExperience";
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
];


const AllExperiences = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch mt-8 w-full">
      {experiences.map((experience, index) => (
        <SingleExperience key={index} experience={experience} index={index} />
      ))}
    </div>
  );
};

export default AllExperiences;
