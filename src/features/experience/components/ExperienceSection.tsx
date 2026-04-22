import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '@shared/styles/styles';
import { experiences } from '@features/portfolio/data/portfolioData';
import type { ExperienceItem } from '@features/portfolio/data/portfolioData';
import SectionWrapper from '@shared/hoc/SectionWrapper';
import { textVariant } from '@shared/lib/motion';

type ExperienceCardProps = {
  experience: ExperienceItem;
};

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const { t } = useTranslation();

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#1d1836',
        color: '#fff',
      }}
      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
      date={t(experience.dateKey)}
      iconStyle={{ background: experience.iconBg, overflow: 'hidden' }}
      icon={
        <div className="flex justify-center items-center w-full h-full rounded-full overflow-hidden">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">
          {t(experience.titleKey)}
        </h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.pointKeys.map((pointKey: string, index: number) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {t(pointKey)}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { t } = useTranslation();

  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p> */}
        <h2 className={`${styles.sectionHeadText} text-center`}>
          {t('experience.title')}
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
