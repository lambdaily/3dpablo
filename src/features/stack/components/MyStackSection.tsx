import React from 'react';
import { useTranslation } from 'react-i18next';

const MyStack = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      <h1>{t('stack.title')}</h1>
      <h3>{t('stack.description')}</h3>
    </div>
  );
};

export default MyStack;
