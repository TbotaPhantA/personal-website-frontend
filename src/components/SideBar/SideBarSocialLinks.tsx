import '@fortawesome/fontawesome-svg-core/styles.css';
import sideBarSocialLinksStyles from '../../styles/components/SideBar/SideBarSocialLinks.module.scss';
import githubSvg from '../../../public/github-mark-white.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { chooseTranslation } from '@/shared/utils/chooseTranslation';

export function SideBarSocialLinks() {
  const { locale } = useRouter();
  const t = chooseTranslation(locale);

  return (
    <div>
      <div className={sideBarSocialLinksStyles.SideBarSocialLinksTitle}>{t.sidebar.links.title}</div>
      <a href="https://github.com/TbotaPhantA" target="_blank">
        <Image
          src={githubSvg}
          alt={'Github'}
          width={40}
          height={40}
        />
      </a>
    </div>
  )
}
