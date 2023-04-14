import homePageStyles from '@/styles/anchors/Home.module.scss';
import { useRouter } from 'next/router';
import { chooseTranslation } from '@/shared/utils/chooseTranslation';

interface HomeProps {
  id: string;
}

export default function Home({ id }: HomeProps) {
  const { locale } = useRouter();
  const t = chooseTranslation(locale);
  const { greeting } = t.pages.main.home;

  return (
    <div id={id} className={homePageStyles.homePage}>
      <div className={homePageStyles.title} data-aos="fade-right">
        <div>{greeting.row1}</div>
        <div>{greeting.row2.col1}<span>{greeting.row2.col2}</span></div>
        <div>{greeting.row3}</div>
      </div>
    </div>
  )
}
