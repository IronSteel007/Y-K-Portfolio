import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>

        I’m Yahya Kouzbour, a multidisciplinary engineer and technology professional passionate about driving innovation across industries. My expertise spans web development, industrial manufacturing, and strategic project management, allowing me to bridge the gap between digital solutions and real-world operations.

        With a strong foundation in engineering, automation, and robotics, I have successfully led projects that optimize processes, enhance productivity, and deliver measurable results. On the digital side, I develop modern web applications using React, JavaScript, and other cutting-edge tools, while also mentoring aspiring developers to build real-world projects and master industry practices.

        Beyond my professional work, I share knowledge through content creation, training, and collaborative initiatives—empowering others to embrace technology, innovate, and achieve their goals. My approach combines technical expertise, creative problem-solving, and leadership, making me adaptable in both
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
