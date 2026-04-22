import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { styles } from '@shared/styles/styles';
import { github } from '@assets';
import SectionWrapper from '@shared/hoc/SectionWrapper';

import { projects } from '@features/portfolio/data/portfolioData';
import type { Project, ProjectTag } from '@features/portfolio/data/portfolioData';
import { fadeIn, textVariant } from '@shared/lib/motion';

type ProjectCardProps = Project & {
  index: number;
};

const ProjectCard = ({
  index,
  nameKey,
  descriptionKey,
  tags,
  image,
  source_code_link,
}: ProjectCardProps) => {
  const { t } = useTranslation();

  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
      className="h-full"
    >
      <div className="bg-tertiary p-5 rounded-2xl w-full h-full flex flex-col">
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={t('a11y.projectImage')}
            className="w-full h-full object-cover rounded-2xl"
          />

          {source_code_link && (
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <button
                type="button"
                onClick={() => window.open(source_code_link, '_blank')}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                aria-label={`${t('a11y.sourceCode')} - ${t(nameKey)}`}
              >
                <img
                  src={github}
                  alt={t('a11y.sourceCode')}
                  className="w-1/2 h-1/2 object-contain"
                />
              </button>
            </div>
          )}
        </div>

        <div className="mt-5 flex-1">
          <h3 className="text-white font-bold text-[24px]">{t(nameKey)}</h3>
          <p className="mt-2 text-secondary text-[14px]">
            {t(descriptionKey)}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag: ProjectTag) => (
            <p
              key={`${nameKey}-${tag.nameKey}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{t(tag.nameKey)}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  const { t } = useTranslation();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>{t('projects.sectionLabel')}</p>
        <h2 className={`${styles.sectionHeadText}`}>{t('projects.title')}</h2>
      </motion.div>

      <div className="w-full flex">
        {t('projects.description')}
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 items-stretch">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

const WorksPage = SectionWrapper(Works, '');
export default WorksPage;
