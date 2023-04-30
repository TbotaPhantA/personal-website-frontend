import { slide as Menu } from 'react-burger-menu';
import sideBarStyles from '@/styles/components/SideBar/SideBar.module.scss';
import Link from 'next/link';
import { CrossIcon } from '@/components/SideBar/CrossIcon';
import { SideBarSocialLinks } from '@/components/SideBar/SideBarSocialLinks';
import { useRouter } from 'next/router';
import { chooseTranslation } from '@/shared/utils/chooseTranslation';
import { LanguageSelect } from '@/components/LanguageSelect/LanguageSelect';

interface SideBarProps {
  pageWrapId: string,
  outerContainerId: string,
}

export function SideBar({ pageWrapId, outerContainerId }: SideBarProps) {
  const router = useRouter();
  const t = chooseTranslation(router.locale);

  return (
    <Menu
      pageWrapId={pageWrapId}
      outerContainerId={outerContainerId}
      burgerButtonClassName={sideBarStyles.BmBurgerButton}
      burgerBarClassName={sideBarStyles.BmBurgerBars}
      crossButtonClassName={sideBarStyles.BmCrossButton}
      customCrossIcon={<CrossIcon/>}
      crossClassName={sideBarStyles.BmCross}
      menuClassName={sideBarStyles.BmMenu}
      morphShapeClassName={sideBarStyles.BmMorphShape}
      itemListClassName={sideBarStyles.BmItemList}
      overlayClassName={sideBarStyles.BmOverlay}
      disableOverlayClick={true}
      noOverlay={true}
    >
      <div className={sideBarStyles.SideBarQuote}>{'"The only way to go fast is to go well."'}</div>
      <div className={sideBarStyles.SideBarQuoteAuthor}>{'Robert C. Martin'}</div>
      <hr className={sideBarStyles.SideBarVerticalLine} />
      <Link href={'/#home'} id={'homeLink'} className={sideBarStyles.BmItem}>{t.sidebar.homeButton}</Link>
      <Link href={'/#about'} id={'aboutLink'} className={sideBarStyles.BmItem}>{t.sidebar.aboutButton}</Link>
      <Link href={'/#books'} id={'booksLink'} className={sideBarStyles.BmItem}>{t.sidebar.booksButton}</Link>
      <Link href={'/#contact'} id={'contactLink'} className={sideBarStyles.BmItem}>{t.sidebar.contactButton}</Link>
      <hr className={sideBarStyles.SideBarVerticalLine} />
      <div className={sideBarStyles.SideBarFooter}>
        <SideBarSocialLinks />
        <LanguageSelect />
      </div>
    </Menu>
  )
}
