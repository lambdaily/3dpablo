import { motion } from 'motion/react';

import { styles } from '@shared/styles/styles';
import { services } from '@features/portfolio/data/portfolioData';
import type { Service } from '@features/portfolio/data/portfolioData';
import SectionWrapper from '@shared/hoc/SectionWrapper';
import { fadeIn, textVariant } from '@shared/lib/motion';

type ServiceCardProps = Service & {
  index: number;
};

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => (
  <div className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </div>
);
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}></p> */}
        <h2 className={styles.sectionHeadText}>About me</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        A paraguayan developer 🇵🇾, graduated in Systems Analysis, I enjoy
        crafting innovative solutions using JavaScript and React. I have
        knowledge in machine learning with Python and a foundational proficiency
        in MySQL and MongoDB. I am enthusiastic about Virtual and Augmented
        Reality, using the Vuforia engine, as well as creating engaging and
        user-friendly interfaces
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};
const AboutPage = SectionWrapper(About, 'about');
export default AboutPage;
