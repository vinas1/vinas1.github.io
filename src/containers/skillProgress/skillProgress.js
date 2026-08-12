import React from "react";
import "./Progress.scss";
import {techStack} from "../../portfolio";
import {Fade} from "react-reveal";
// import {illustration} from "../../portfolio";
// import Build from "../../assets/lottie/build";
// import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function StackProgress() {
  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-section-container">  {/* Container for the heading and the skills */}
          <h1 className="skills-section-heading">{techStack.title}</h1>
          <div className="skills-main-container">
            {Object.keys(techStack.categories).map((category) => {
              const skills = techStack.categories[category];
              return (
                <div key={category} className="skills-category">
                  <h2 className="category-title">{category}</h2>
                  {skills.map((skill, i) => (
                    <div key={i} className="skill">
                      <p className="skill-name">{skill.skillName}</p>
                      <div className="meter">
                        <span style={{ width: skill.progressPercentage }} className="meter-bar"></span>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}