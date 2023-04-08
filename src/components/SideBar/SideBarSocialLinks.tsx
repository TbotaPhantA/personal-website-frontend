import '@fortawesome/fontawesome-svg-core/styles.css';
import sideBarSocialLinksStyles from '../../styles/components/SideBarSocialLinks.module.scss';
import githubSvg from '../../../public/github-mark-white.svg';
import Image from 'next/image';

export function SideBarSocialLinks() {
  return (
    <div className={sideBarSocialLinksStyles.SideBarSocialLinks}>
      <div className={sideBarSocialLinksStyles.SideBarSocialLinksTitle}>Links</div>
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
