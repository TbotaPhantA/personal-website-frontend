import aboutStyles from '../styles/anchors/About.module.scss';
import { useRouter } from 'next/router';
import { chooseTranslation } from '@/shared/utils/chooseTranslation';

interface HomeProps {
  id: string;
}

export default function About({ id }: HomeProps) {
  const { locale } = useRouter();
  const t = chooseTranslation(locale);
  const { about } = t.pages.main;

  return (
    <div id={id} className={aboutStyles.AboutPage}>
      <div className={aboutStyles.AboutPageTitle} data-aos="fade-left">
        <div>{about.title}</div>
        <div className={aboutStyles.AboutPageContent}>{about.description}</div>
      </div>
    </div>
  )
}
