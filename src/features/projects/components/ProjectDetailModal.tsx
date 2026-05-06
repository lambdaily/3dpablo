import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { github } from '@assets';
import type {
  Project,
  ProjectGalleryImage,
  ProjectTag,
} from '@features/portfolio/data/portfolioData';

type ProjectDetailModalProps = {
  open: boolean;
  onClose: () => void;
  project: Project | null;
};

const getYouTubeId = (url: string): string | null => {
  try {
    const u = new URL(url);
    if (u.hostname.includes('youtu.be')) return u.pathname.slice(1);
    if (u.searchParams.get('v')) return u.searchParams.get('v');
    const parts = u.pathname.split('/');
    const embedIdx = parts.indexOf('embed');
    if (embedIdx >= 0 && parts[embedIdx + 1]) return parts[embedIdx + 1];
    return null;
  } catch {
    return null;
  }
};

const PlayStoreIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4" fill="currentColor">
    <path d="M3.6 1.7C3.2 2 3 2.5 3 3.2v17.6c0 .7.2 1.2.6 1.5l9.9-10.3L3.6 1.7zm11.3 9.6L5.7 1.6 17.3 8 14.9 11.3zm0 1.4l2.4 3.3L5.7 22.4l9.2-9.7zm6.4-2.6l-3.5-2 2.7 3.7-2.7 3.7 3.5-2c1-.5 1.5-1.1 1.5-1.7s-.5-1.2-1.5-1.7z" />
  </svg>
);

const AppStoreIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4" fill="currentColor">
    <path d="M16.365 1.43c0 1.14-.41 2.22-1.16 3.04-.78.85-2.06 1.51-3.13 1.43-.13-1.12.41-2.27 1.13-3.04C14.06 1.97 15.32 1.45 16.365 1.43zM20.5 17.13c-.55 1.27-.81 1.84-1.51 2.96-.99 1.55-2.39 3.49-4.13 3.5-1.55.02-1.95-1.01-4.05-1-2.1.01-2.54 1.02-4.09 1-1.74-.01-3.07-1.76-4.06-3.32-2.77-4.34-3.06-9.43-1.35-12.13 1.21-1.91 3.13-3.03 4.93-3.03 1.83 0 2.98 1 4.49 1 1.46 0 2.35-1 4.47-1 1.6 0 3.3.87 4.51 2.38-3.97 2.18-3.32 7.84.79 9.64z" />
  </svg>
);

const ProjectDetailModal = ({ open, onClose, project }: ProjectDetailModalProps) => {
  const { t } = useTranslation();
  const [lightbox, setLightbox] = useState<ProjectGalleryImage | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightbox) setLightbox(null);
        else onClose();
      }
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose, lightbox]);

  useEffect(() => {
    if (!open) setLightbox(null);
  }, [open]);

  if (typeof document === 'undefined') return null;

  const videoId = project?.videoUrl ? getYouTubeId(project.videoUrl) : null;
  const gallery = project?.images ?? [];

  return createPortal(
    <AnimatePresence>
      {open && project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label={t(project.nameKey)}
        >
          <button
            type="button"
            aria-label={t('a11y.closeModal')}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-default"
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-tertiary text-white shadow-2xl border border-white/10"
          >
            <div className="relative">
              <img
                src={project.image}
                alt={t('a11y.projectImage')}
                className="w-full h-[220px] sm:h-[280px] object-cover rounded-t-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tertiary via-tertiary/30 to-transparent rounded-t-2xl" />

              {project.roleKey && (
                <span className="absolute top-4 left-4 bg-black/70 backdrop-blur text-white text-[11px] font-semibold px-2.5 py-1 rounded-full border border-white/10">
                  {t(project.roleKey)}
                </span>
              )}

              <button
                type="button"
                onClick={onClose}
                aria-label={t('a11y.closeModal')}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 hover:bg-black/90 border border-white/10 hover:border-white/30 flex items-center justify-center transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <div className="px-6 sm:px-8 pb-8 -mt-10 relative">
              <h2 className="text-white font-bold text-[28px] sm:text-[32px] leading-tight">
                {t(project.nameKey)}
              </h2>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag: ProjectTag) => (
                  <span
                    key={`${project.nameKey}-modal-${tag.nameKey}`}
                    className={`text-[13px] ${tag.color}`}
                  >
                    #{t(tag.nameKey)}
                  </span>
                ))}
              </div>

              <p className="mt-5 text-secondary text-[15px] leading-relaxed">
                {t(project.descriptionKey)}
              </p>

              {(project.playStoreLink || project.appStoreLink || project.source_code_link) && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.playStoreLink && (
                    <a
                      href={project.playStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${t('a11y.playStore')} - ${t(project.nameKey)}`}
                      className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-black/60 hover:bg-black/80 border border-white/10 hover:border-white/30 transition-colors"
                    >
                      <PlayStoreIcon />
                      <span className="flex flex-col leading-tight text-left">
                        <span className="text-[9px] uppercase tracking-wide text-secondary">
                          {t('a11y.playStoreCaption')}
                        </span>
                        <span className="text-[13px] font-semibold text-white">Google Play</span>
                      </span>
                    </a>
                  )}
                  {project.appStoreLink && (
                    <a
                      href={project.appStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${t('a11y.appStore')} - ${t(project.nameKey)}`}
                      className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-black/60 hover:bg-black/80 border border-white/10 hover:border-white/30 transition-colors"
                    >
                      <AppStoreIcon />
                      <span className="flex flex-col leading-tight text-left">
                        <span className="text-[9px] uppercase tracking-wide text-secondary">
                          {t('a11y.appStoreCaption')}
                        </span>
                        <span className="text-[13px] font-semibold text-white">App Store</span>
                      </span>
                    </a>
                  )}
                  {project.source_code_link && (
                    <a
                      href={project.source_code_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${t('a11y.sourceCode')} - ${t(project.nameKey)}`}
                      className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-black/60 hover:bg-black/80 border border-white/10 hover:border-white/30 transition-colors"
                    >
                      <img src={github} alt="" className="w-4 h-4" />
                      <span className="text-[13px] font-semibold text-white">
                        {t('a11y.sourceCode')}
                      </span>
                    </a>
                  )}
                </div>
              )}

              {project.detailSections && project.detailSections.length > 0 && (
                <div className="mt-8 space-y-5">
                  {project.detailSections.map((section) => (
                    <div key={section.titleKey}>
                      <h3 className="text-white font-semibold text-[16px] uppercase tracking-wide">
                        {t(section.titleKey)}
                      </h3>
                      <p className="mt-2 text-secondary text-[14px] leading-relaxed">
                        {t(section.bodyKey)}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {gallery.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-white font-semibold text-[16px] uppercase tracking-wide mb-3">
                    {t('projects.galleryTitle')}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {gallery.map((img, i) => (
                      <button
                        key={`${img.src}-${i}`}
                        type="button"
                        onClick={() => setLightbox(img)}
                        aria-label={img.altKey ? t(img.altKey) : `${t('a11y.projectImage')} ${i + 1}`}
                        className="group relative overflow-hidden rounded-xl border border-white/10 hover:border-white/30 focus-visible:border-white/50 outline-none transition-colors aspect-[4/3] bg-black/40"
                      >
                        <img
                          src={img.src}
                          alt={img.altKey ? t(img.altKey) : t('a11y.projectImage')}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        <span className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {videoId && (
                <div className="mt-8">
                  <h3 className="text-white font-semibold text-[16px] uppercase tracking-wide mb-3">
                    {t('projects.videoTitle')}
                  </h3>
                  <div className="relative w-full overflow-hidden rounded-xl border border-white/10" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                      title={t(project.nameKey)}
                      frameBorder={0}
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          <AnimatePresence>
            {lightbox && (
              <motion.div
                key="lightbox"
                className="absolute inset-0 z-20 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                role="dialog"
                aria-modal="true"
                aria-label={lightbox.altKey ? t(lightbox.altKey) : t('a11y.projectImage')}
              >
                <button
                  type="button"
                  aria-label={t('a11y.closeModal')}
                  onClick={() => setLightbox(null)}
                  className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-zoom-out"
                />
                <motion.img
                  initial={{ scale: 0.96, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.96, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 28 }}
                  src={lightbox.src}
                  alt={lightbox.altKey ? t(lightbox.altKey) : t('a11y.projectImage')}
                  className="relative z-10 max-w-[92%] max-h-[88vh] object-contain rounded-xl shadow-2xl border border-white/10"
                />
                <button
                  type="button"
                  onClick={() => setLightbox(null)}
                  aria-label={t('a11y.closeModal')}
                  className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/70 hover:bg-black/90 border border-white/10 hover:border-white/30 flex items-center justify-center transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default ProjectDetailModal;
