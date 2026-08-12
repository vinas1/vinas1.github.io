import React from "react";
import "./Progress.scss";
import { techStack } from "../../portfolio";
import { Fade } from "react-reveal";

export default function StackProgress() {
  if (!techStack.viewSkillBars) return null;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="skills-container">
        <div className="skills-bar">
          <h1 className="skills-heading">{techStack.title}</h1>
          
          {/* Map through techStack.categories or techStack.experience */}
          {techStack.categories ? (
            Object.keys(techStack.categories).map((category, i) => (
              <div key={i} className="skill-category">
                <h3>{category}</h3>
                {techStack.categories[category].map((exp, j) => (
                  <div key={j} className="skill">
                    <p>
                      {exp.imageUrl && (
                        <img 
                          src={exp.imageUrl?.default || exp.imageUrl} 
                          alt={exp.skillName} 
                          style={{ width: "20px", marginRight: "8px", verticalAlign: "middle" }} 
                        />
                      )}
                      {exp.skillName}
                    </p>
                    <div className="meter">
                      <span style={{ width: exp.progressPercentage }}></span>
                    </div>
                  </div>
                ))}
              </div>
            ))
          ) : (
            techStack.experience?.map((exp, i) => (
              <div key={i} className="skill">
                <p>{exp.Stack}</p>
                <div className="meter">
                  <span style={{ width: exp.progressPercentage }}></span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Fade>
  );
}