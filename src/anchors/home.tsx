import homePageStyles from '@/styles/anchors/Home.module.scss';

interface HomeProps {
  id: string;
}

export default function Home({ id }: HomeProps) {
  return (
    <div id={id} className={homePageStyles.homePage}>
      <div className={homePageStyles.title} data-aos="fade-right">
        <div>{"Hi,"}</div>
        <div>{"I'm "}<span>{"Timur"}</span></div>
        <div>{"Backend developer"}</div>
      </div>
    </div>
  )
}
