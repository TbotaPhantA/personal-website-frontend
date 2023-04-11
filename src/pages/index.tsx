import About from '@/anchors/about';
import Home from '@/anchors/home';
import mainStyles from '@/styles/Main.module.scss';

export default function Main() {
  return (
    <div className={mainStyles.MainPage}>
      <Home id="home" />
      <About id="about" />
    </div>
  )
}
