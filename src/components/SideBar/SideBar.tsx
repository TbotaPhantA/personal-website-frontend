import { push as Menu } from 'react-burger-menu';
import sideBarStyles from '@/styles/components/SideBar.module.scss';
import Link from 'next/link';

interface SideBarProps {
  pageWrapId: string,
  outerContainerId: string,
}

export function SideBar({ pageWrapId, outerContainerId }: SideBarProps) {
  return (
    <Menu
      pageWrapId={pageWrapId}
      outerContainerId={outerContainerId}
      burgerButtonClassName={sideBarStyles.BmBurgerButton}
      burgerBarClassName={sideBarStyles.BmBurgerBars}
      crossButtonClassName={sideBarStyles.BmCrossButton}
      crossClassName={sideBarStyles.BmCross}
      menuClassName={sideBarStyles.BmMenu}
      morphShapeClassName={sideBarStyles.BmMorphShape}
      itemListClassName={sideBarStyles.BmItemList}
      overlayClassName={sideBarStyles.BmOverlay}
    >
      <Link href={'/'} id={'home'} className={sideBarStyles.BmItem}>Home</Link>
      <Link href={'/about'} id={'about'} className={sideBarStyles.BmItem}>About</Link>
    </Menu>
  )
}
