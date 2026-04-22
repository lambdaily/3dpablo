import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import { styles } from '@shared/styles/styles';
import { services } from '@features/portfolio/data/portfolioData';
import SectionWrapper from '@shared/hoc/SectionWrapper';
import { fadeIn, textVariant } from '@shared/lib/motion';

type ServiceCardProps = {
  index: number;
  title: string;
  icon: string;
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
  const { t } = useTranslation();

  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}></p> */}
        <h2 className={styles.sectionHeadText}>{t('about.title')}</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {t('about.description')}
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.titleKey}
            index={index}
            title={t(service.titleKey)}
            icon={service.icon}
          />
        ))}
      </div>
    </>
  );
};
const AboutPage = SectionWrapper(About, 'about');
export default AboutPage;
