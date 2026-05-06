import { useState } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { styles } from '@shared/styles/styles';
import { github } from '@assets';
import SectionWrapper from '@shared/hoc/SectionWrapper';

import { projects } from '@features/portfolio/data/portfolioData';
import type { Project, ProjectTag } from '@features/portfolio/data/portfolioData';
import { fadeIn, textVariant } from '@shared/lib/motion';
import ProjectDetailModal from './ProjectDetailModal';

type ProjectCardProps = Project & {
  index: number;
  onOpenDetails?: () => void;
};

const PlayStoreBadge = ({ label }: { label: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4" fill="currentColor">
    <title>{label}</title>
    <path d="M3.6 1.7C3.2 2 3 2.5 3 3.2v17.6c0 .7.2 1.2.6 1.5l9.9-10.3L3.6 1.7zm11.3 9.6L5.7 1.6 17.3 8 14.9 11.3zm0 1.4l2.4 3.3L5.7 22.4l9.2-9.7zm6.4-2.6l-3.5-2 2.7 3.7-2.7 3.7 3.5-2c1-.5 1.5-1.1 1.5-1.7s-.5-1.2-1.5-1.7z" />
  </svg>
);

const AppStoreBadge = ({ label }: { label: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4" fill="currentColor">
    <title>{label}</title>
    <path d="M16.365 1.43c0 1.14-.41 2.22-1.16 3.04-.78.85-2.06 1.51-3.13 1.43-.13-1.12.41-2.27 1.13-3.04C14.06 1.97 15.32 1.45 16.365 1.43zM20.5 17.13c-.55 1.27-.81 1.84-1.51 2.96-.99 1.55-2.39 3.49-4.13 3.5-1.55.02-1.95-1.01-4.05-1-2.1.01-2.54 1.02-4.09 1-1.74-.01-3.07-1.76-4.06-3.32-2.77-4.34-3.06-9.43-1.35-12.13 1.21-1.91 3.13-3.03 4.93-3.03 1.83 0 2.98 1 4.49 1 1.46 0 2.35-1 4.47-1 1.6 0 3.3.87 4.51 2.38-3.97 2.18-3.32 7.84.79 9.64z" />
  </svg>
);

const StoreButton = ({
  href,
  ariaLabel,
  label,
  caption,
  Icon,
}: {
  href?: string;
  ariaLabel: string;
  label: string;
  caption: string;
  Icon: React.ComponentType<{ label: string }>;
}) => {
  const isDisabled = !href;

  if (isDisabled) {
    return (
      <button
        type="button"
        disabled
        aria-label={`${ariaLabel} (${caption.toLowerCase()})`}
        onClick={(e) => e.stopPropagation()}
        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-black/35 border border-white/10 opacity-70 cursor-not-allowed"
      >
        <Icon label={label} />
        <span className="flex flex-col leading-tight text-left">
          <span className="text-[9px] uppercase tracking-wide text-secondary">
            {caption}
          </span>
          <span className="text-[12px] font-semibold text-white">{label}</span>
        </span>
      </button>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      onClick={(e) => e.stopPropagation()}
      className="group/store flex items-center gap-2 px-3 py-2 rounded-xl bg-black/60 hover:bg-black/80 border border-white/10 hover:border-white/30 transition-all duration-200"
    >
      <Icon label={label} />
      <span className="flex flex-col leading-tight text-left">
        <span className="text-[9px] uppercase tracking-wide text-secondary">
          {caption}
        </span>
        <span className="text-[12px] font-semibold text-white">{label}</span>
      </span>
    </a>
  );
};

const ProjectCard = ({
  index,
  nameKey,
  descriptionKey,
  shortDescriptionKey,
  roleKey,
  tags,
  image,
  source_code_link,
  playStoreLink,
  appStoreLink,
  showPlayStoreBadge,
  showAppStoreBadge,
  detailSections,
  videoUrl,
  onOpenDetails,
}: ProjectCardProps) => {
  const { t } = useTranslation();
  const hasDetails = Boolean(
    onOpenDetails && ((detailSections && detailSections.length > 0) || videoUrl),
  );
  const blurb = t(shortDescriptionKey ?? descriptionKey);

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

          {roleKey && (
            <div className="absolute top-3 left-3">
              <span className="bg-black/70 backdrop-blur text-white text-[11px] font-semibold px-2.5 py-1 rounded-full border border-white/10">
                {t(roleKey)}
              </span>
            </div>
          )}
        </div>

        <div className="mt-5 flex-1">
          <h3 className="text-white font-bold text-[24px]">{t(nameKey)}</h3>
          <p className="mt-2 text-secondary text-[14px]">{blurb}</p>

          {hasDetails && (
            <button
              type="button"
              onClick={onOpenDetails}
              className="group mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-white hover:text-white/90 transition-colors"
              aria-label={`${t('projects.learnMore')} - ${t(nameKey)}`}
            >
              <span className="bg-gradient-to-r from-[#915EFF] to-[#7c4dff] bg-clip-text text-transparent">
                {t('projects.learnMore')}
              </span>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="w-4 h-4 text-[#915EFF] transition-transform group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          )}
        </div>

        {(playStoreLink || appStoreLink || showPlayStoreBadge || showAppStoreBadge) && (
          <div className="mt-4 flex flex-wrap gap-2">
            {(playStoreLink || showPlayStoreBadge) && (
              <StoreButton
                href={playStoreLink}
                ariaLabel={`${t('a11y.playStore')} - ${t(nameKey)}`}
                label="Google Play"
                caption={t('a11y.playStoreCaption')}
                Icon={PlayStoreBadge}
              />
            )}
            {(appStoreLink || showAppStoreBadge) && (
              <StoreButton
                href={appStoreLink}
                ariaLabel={`${t('a11y.appStore')} - ${t(nameKey)}`}
                label="App Store"
                caption={t('a11y.appStoreCaption')}
                Icon={AppStoreBadge}
              />
            )}
          </div>
        )}

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
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>{t('projects.sectionLabel')}</p>
        <h2 className={`${styles.sectionHeadText}`}>{t('projects.title')}</h2>
      </motion.div>

      <div className="w-full flex">{t('projects.description')}</div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 items-stretch">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
            onOpenDetails={() => setActiveProject(project)}
          />
        ))}
      </div>

      <ProjectDetailModal
        open={Boolean(activeProject)}
        onClose={() => setActiveProject(null)}
        project={activeProject}
      />
    </>
  );
};

const WorksPage = SectionWrapper(Works, '');
export default WorksPage;
