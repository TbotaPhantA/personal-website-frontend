import homePageStyles from '@/styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <div className={homePageStyles.homePage}>
        <div className={homePageStyles.title}>
          <div>{"Hi,"}</div>
          <div>{"I'm "}<span>{"Timur"}</span></div>
          <div>{"Backend developer"}</div>
        </div>
      </div>
    </>
  )
}
