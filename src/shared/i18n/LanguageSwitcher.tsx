import { useTranslation } from 'react-i18next';

type LanguageCode = 'en' | 'es' | 'fr';

const LANGUAGES: Array<{ code: LanguageCode; labelKey: string }> = [
  { code: 'en', labelKey: 'language.en' },
  { code: 'es', labelKey: 'language.es' },
  { code: 'fr', labelKey: 'language.fr' },
];

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const currentLanguage = (i18n.resolvedLanguage ?? 'en') as LanguageCode;

  return (
    <div className="flex items-center gap-2 flex-wrap relative z-30">
      {LANGUAGES.map((language) => {
        const isActive = currentLanguage === language.code;

        return (
          <button
            key={language.code}
            type="button"
            onClick={() => {
              void i18n.changeLanguage(language.code);
            }}
            className={`px-2 py-1 rounded-md text-xs font-semibold transition-colors pointer-events-auto ${
              isActive
                ? 'bg-[#eebbc3] text-black'
                : 'bg-black-100 text-white hover:bg-tertiary'
            }`}
            aria-pressed={isActive}
          >
            {t(language.labelKey)}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
