import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import CTA from "../Components/CTA";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";
import { Stars, Text, Text3D } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text text-white">
        Hello, I'm{" "}
        <span className="blue-gradient_text_1 font-semibold drop-shadow">
          Nirai
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-300">
        <p>
          As an innovative frontend developer, I continuously seek creative
          solutions to enhance user experiences and interface designs. My focus
          lies in pushing the boundaries of traditional frontend development by
          incorporating cutting-edge technologies and intuitive designs.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text text-white font-semibold drop-shadow">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text text-white">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-300">
          <p>
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline >
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  backgroundColor: "#60a2b4",
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  background: "linear-gradient(to top right, black -30% ,#e0e5eb 90% )",
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium text-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
