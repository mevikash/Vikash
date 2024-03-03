import React from "react";
// import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../pages/styles";
// import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const ServiceCard = ({ index, title, icon }) => (
  <div className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </div>
);

const About = () => {
  return (
    <section className='max-container bg-hero-pattern1'>
      <div className=" ">
      <h1 className='head-text text-black flex justify-center '>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Vikash
        </span>{" "}
        👋
      </h1>
      <motion.div variants={textVariant()}>
        {/* <h2 className={styles.sectionSubText}>Introduction</h2> */}
        {/* <h2 className={styles.sectionHeadText}>Overview</h2> */}
      </motion.div>

      <div className='mt-5 flex flex-col gap-3 text-black '>
        <p className="flex justify-center">
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
        </p>
      </div>

     
      




      
      <div className='py-10 flex flex-col'>
        <h3 className='flex justify-center subhead-text'>My Skills</h3>
        
        <div className='mt-16 flex flex-wrap gap-12'>
        {skills.map((skill) => (
          <div className='block-container w-20 h-20' key={skill.name}>
          <div className='btn-back rounded-xl' />
          <div className='btn-front rounded-xl flex justify-center items-center'>
          <img
          src={skill.imageUrl}
          alt={skill.name}
          className='w-1/2 h-1/2 object-contain'
          />
          </div>
          </div>
          ))}
          </div>
        </div>

      <div className='py-16'>
        <h3 className=' flex justify-center subhead-text'>Education</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        {/* <p>
        I've worked with all sorts of companies, leveling up my skills and
        teaming up with smart people. Here's the rundown:
        </p> */}
        </div>
        
        <div className='mt-12 flex'>
        <VerticalTimeline>
        {experiences.map((experience, index) => (
              <VerticalTimelineElement
              key={experience.company_name}
              date={experience.date}
              iconStyle={{ background: experience.iconBg }}
              icon={
                <div className='flex justify-center items-center w-full h-full'>
                <img
                src={experience.icon}
                alt={experience.company_name}
                className='w-[60%] h-[60%] object-contain'
                />
                </div>
              }
              contentStyle={{
                borderBottom: "8px",
                borderStyle: "solid",
                borderBottomColor: experience.iconBg,
                boxShadow: "none",
              }}
              >
              <div>
              <h3 className='text-black text-xl font-poppins font-semibold'>
              {experience.title}
              </h3>
                  <p
                  className='text-black-500 font-medium text-base'
                  style={{ margin: 0 }}
                  >
                  {experience.company_name}
                  </p>
                  </div>
                  
                  <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                    key={`experience-point-${index}`}
                    className='text-black-500/50 font-normal pl-1 text-sm'
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

      <hr className='border-slate-200' />

      <CTA />
                    </div>
    </section>
  );
};

export default About;
