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
    <div className="w-full border-y bg-brown border-lightGrey text-lightGrey py-8">
      {/* Responsive Auto Grid - Much cleaner approach */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 md:px-8 xl:px-12">
        {skills.map((skill, index) => (
          <div key={index} className="text-center">
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium uppercase tracking-wide leading-relaxed hover:text-white transition-colors duration-300">
              {skill}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubHeroMain;
