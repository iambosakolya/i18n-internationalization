"use client";
import { useTranslations, useLocale } from 'next-intl';
import {usePathname, useRouter} from '@/i18n/routing';

import styles from "./LangSwitcher.module.css";

type LangSwitcherProps = {
  caption: string;
};

export default function LangSwitcher({ caption }: LangSwitcherProps) {
  const router = useRouter();
  const currentLocale = useLocale();
  const pathname = usePathname();

  const handleChange = () => {
    router.replace(
      { pathname },
      { locale: currentLocale === 'en' ? 'uk' : 'en' });
};

  return (
    <label>
      <span className={styles.label}>{caption}</span>
      <select
        className={styles.select}
        onChange={handleChange}>
        <option value="en">English</option>
        <option value="uk">Українська</option>
      </select>
    </label>
  );
}
