'use client';

import { CsmCategory } from '@prisma/client';
import { Copyright } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { AuthStatus } from '@/constants/auth';
import { OWNER_EMAIL } from '@/constants/common';
import { useCurrentUser } from '@/hooks/use-current-user';

import { LanguageSwitcher } from '../common/language-switcher';
import { MadeWithLove } from '../common/made-with-love';
import { ThemeSwitcher } from '../common/theme-switcher';
import { CsmModal } from '../modals/csm-modal';

type FooterProps = {
  categories: CsmCategory[];
};

export const Footer = ({ categories }: FooterProps) => {
  const t = useTranslations('footer');

  const { user, status } = useCurrentUser();

  const showLanguageSwitcher = !user?.userId && status !== AuthStatus.LOADING;

  return (
    <footer className="w-full border-t bg-white dark:bg-neutral-950 py-3">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex grid-flow-row items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Copyright className="h-3 w-3 mr-1" />
            <span>{new Date().getFullYear()}</span>
            <span className="mx-1">•</span>
            <span>{t("copyright")}</span>
            
          </div>
          <div className="justify-normal flex-auto">{t("testModeDeclaimer")}</div>
          
        </div>
        {showLanguageSwitcher && (
          <div className="  items-end">
            <ThemeSwitcher />
          </div>
        )}
      </div>
    </footer>
  );
};
