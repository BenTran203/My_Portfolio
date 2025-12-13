import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-neutral-900 dark:bg-black py-12 md:py-16 px-6 md:px-8 text-center border-t border-neutral-800">
      <div className="max-w-[1400px] mx-auto">
        <p className="text-neutral-400 text-base m-0">
          {t('footer.text')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

